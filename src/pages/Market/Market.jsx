import { Button, Text } from "@rneui/base";
import { useCallback, useEffect, useState } from "react";
import { Dimensions, TextInput, View } from "react-native";
import styles from "../../styles/styles";
import { Dropdown } from "react-native-element-dropdown";
import dayjs from "dayjs";
import { DatePickerModal, en } from "react-native-paper-dates";
import { LineChart } from "react-native-chart-kit";
import ManageStockModal from "./ManageStockModal";
import PurchaseStockModal from "./PurchaseStockModal";


const data = [
    { timespan: "day"},
    { timespan: "hour" },
    { timespan: "month" }
]

const Market = () => {

    const POLYGON_URL="https://api.polygon.io"
    const POLYGON_KEY="9Jwt0XFuoztmW4AgQb4WUIH8jTYdm0dn"

    const getDefaultDateRange = () => {
        const today = dayjs();
        const oneWeekAgo = today.subtract(7, 'day'); // Subtract 7 days to get one week ago
        return { startDate: oneWeekAgo.toDate(), endDate: today.toDate() };
    };

    const [filterData, setFilterData] = useState({});
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [{ data: [] }],
      });
    const [open, setOpen] = useState(false);
    const [selectedDateRange, setSelectedDateRange] = useState(getDefaultDateRange());
    const [isManageModalVisible, setManageModalVisible] = useState(false);
    const [isPurchaseModalVisible, setPurchaseModalVisible] = useState(false);

    const onDismiss = useCallback(() => {
     setOpen(false);
   }, [setOpen]);
 
  const onConfirm = useCallback(
     ({ startDate, endDate }) => {
       setOpen(false);
       setSelectedDateRange({ startDate, endDate });
        const formattedStartDate = startDate.toISOString().split('T')[0];
        const formattedEndDate = endDate.toISOString().split('T')[0];
        setFilterData(prevData => ({
            ...prevData,
            startDate: formattedStartDate,
            endDate: formattedEndDate,
        }));
     },
     [setOpen, setSelectedDateRange]
   );
    const queryURL = `/v2/aggs/ticker/${filterData.stocksTicker}/range/${filterData.multiplier}/${filterData.timespan}/${filterData.startDate}/${filterData.endDate}`
    
    const changeStockTicker = (text) => {
        setFilterData(prevData => ({ ...prevData, stocksTicker: text }));
    };

    const changeMultiplier = (text) => {
        setFilterData(prevData => ({ ...prevData, multiplier: text }));
    };

    const changeSelection = (item) => {
        setFilterData(prevData => ({ ...prevData, timespan: item.timespan}))
    };

    const handleDateChange = (dates) => {
        console.log("Date Range Changed", dates);
        const { startDate, endDate } = dates;
        setFilterData(prevData => ({
            ...prevData,
            startDate: dayjs(startDate).format('YYYY-MM-DD'), // Format the date as needed
            endDate: dayjs(endDate).format('YYYY-MM-DD'), // Format the date as needed
        }));
    };

    useEffect(() => {
        const fetchData = async () => {
            console.log("UseeffectCalled")
            // Check if necessary filterData is present
            if(filterData.stocksTicker && filterData.multiplier && filterData.timespan && filterData.startDate && filterData.endDate) {
                const url = `${POLYGON_URL}${queryURL}?apiKey=${POLYGON_KEY}`;
                try {
                    console.log('Making API Call to:', url);
                    // Here, insert your API call logic using fetch or any HTTP client you prefer
                    const response = await fetch(url);
                    const data = await response.json();
                    if (data.results) {
                        console.log(data.results)
                        const formattedData = {
                            labels: data.results.map(result => {
                                const date = new Date(result.t)
                                const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;
                                return formattedDate
                            }), // Keeping timestamp as is for now
                            datasets: [{
                                data: data.results.map(result => result.c), // Use close prices
                            }],
                            
                        };
                        console.log("Fetch Successful")
                        console.log(formattedData)
                        setChartData(formattedData)
                    } else {
                        console.log("Result set is empty, please wait to make more api calls")
                        setChartData({ labels: [], datasets: [{ data: [] }] }); // Reset if no data
                    }
                    
                    // Process your data as needed
                } catch (error) {
                    console.error('API Call Error:', error);
                    setChartData({ labels: [], datasets: [{ data: [] }] }); // Reset if no data
                }
            } else {
                console.log("Missing data, cannot make call")
                console.log(filterData)
            }
        };
        fetchData();
    }, [filterData]);

    return (
        <View>
            <View>
                <Text>Current Balance</Text>
                <Text>Unrealized Gains</Text>
                <Button title="Manage Stocks" onPress={() => {setManageModalVisible(true)}}></Button>
            </View>

            <ManageStockModal isVisible={isManageModalVisible} setModalVisible={setManageModalVisible}></ManageStockModal>
            <PurchaseStockModal isVisible={isPurchaseModalVisible} setModalVisible={setPurchaseModalVisible}/>

            <View>
            <Text>Enter a stock ticker</Text>
            <TextInput style={styles.input} onChangeText={(params) => {changeStockTicker(params)}}></TextInput>

            <Text>Enter a multiplier</Text>
            <TextInput style={styles.input} onChangeText={changeMultiplier}></TextInput>

            <Text>select a timespan</Text>
            <Dropdown
                data={data} labelField="timespan" valueField="value" onChange={(params) => {changeSelection(params)}}/>

            <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
                Pick range
            </Button>
            <DatePickerModal
            locale="en"
            mode='range'
            visible={open}
            onDismiss={onDismiss}
            startDate={selectedDateRange.startDate}
            endDate={selectedDateRange.endDate}
            onConfirm={onConfirm}
            />
            </View>
            {chartData.datasets && chartData.datasets.length > 0 && chartData.datasets[0].data.length > 0 ? (
            <View>
                <Text style={{fontSize: 20, fontWeight: '500', textAlign: 'center', marginBottom: 10}}>
                    {`Chart for ${filterData.stocksTicker}`}
                </Text>
                <Text style={{fontSize: 15, fontWeight: '200', textAlign: 'center', marginBottom: 10}}>
                    {`${filterData.startDate} - ${filterData.endDate}`}
                </Text>
                <LineChart
                    data={chartData}
                    width={Dimensions.get('window').width - 16}
                    height={220}
                    yAxisLabel="$"
                    chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#fb8c00',
                        backgroundGradientTo: '#ffa726',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: '6',
                            strokeWidth: '2',
                            stroke: '#ffa726'
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
                <Button title="Buy Stock" onPress={() => {setPurchaseModalVisible(true)}}></Button>
            </View>
        ) : (
            <Text>No data available for the chart.</Text>
        )}
        </View>
    );
}

export default Market;