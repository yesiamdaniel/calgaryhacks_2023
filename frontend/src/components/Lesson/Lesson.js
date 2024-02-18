import { ImageBackground,  Touchable, View, StyleSheet, Dimensions, ScrollView, SafeAreaView, FlatList } from "react-native";
import { SearchBar, Text } from "@rneui/themed"
import { useState, useEffect } from "react";
import { Button } from "@rneui/base";
import  { initializeApp} from 'firebase/app';
import { useRouter } from "expo-router";
import  { getFirestore, collection, query, where, getDocs, setDoc, doc, updateDoc } from 'firebase/firestore';
import { firebaseConfig, app, db } from "../../constants/firebase";






const Lesson = (props) => {
    const router = useRouter();

    [currentView, setView] = useState("quiz");


    const testFire = () => {
        const q = query(collection(db, "Path1/Path1/Module1.1"))
        const docs = getDocs(q).then((docs) => {
  
            docs.forEach((x) => {
                alert(JSON.stringify(x.data()));
              })
        }) ; 
    }



    useEffect(() => {






    });


    const base = (   <SafeAreaView style={styles.SafeAreaView}>

        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
  
          <View style={styles.topBar}>
  
                  <Text h3Style={styles.header} h3>
                          {props.info.name}
                  </Text>
     
              </View>
              <View style={styles.main}>
                  
              <Text h3Style={styles.contentText} h3 adjustsFontSizeToFit={true}>
                  {props.info.text}
                  </Text>
  
          
  
              </View>
  
          </View>
          </ScrollView>
          </SafeAreaView>
      );

//#6b53ff
      const quiz = (
<SafeAreaView style={styles.SafeAreaView}>

<ScrollView style={styles.scrollView}>

  <View style={styles.container}>
  <ImageBackground
    source={require("../../assets/quiz_background.png")} resizeMode='cover' style={{flex:1, width:"100%", height:"100%"}}>

  <View style={styles.topBar}>

          <Text h3Style={styles.header} h3>
                  
          </Text>

      </View>
      <View style={styles.main}>
          


    <View style={{backgroundColor:"#ffffff", borderRadius:10,         shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 8,
        alignItems:"center",
        justifyContent:"center"}
}>
      <Text h3Style={styles.contentText} h3 adjustsFontSizeToFit={true}>
          {props.info.question}
          </Text>
          </View>


        <View 
        style={styles.buttonContainer} id="buttons">
        <Button 
        titleStyle={{color:"black"}}
        color="#ffffff"
        style={styles.answerButton} 
        title={props.info.answers[0]}
        radius="15">
        </Button>
        <Button color="#ffffff" 
        titleStyle={{color:"black"}}
        style={styles.answerButton} 
        title={props.info.answers[1]}
        radius="15">
        </Button>
        <Button color="#ffffff" 
        titleStyle={{color:"black"}}
        style={styles.answerButton} 
        title={props.info.answers[2]}
        radius="15">
        </Button>
        <Button color="#ffffff" 
        titleStyle={{color:"black"}}
        style={styles.answerButton} 
        title={props.info.answers[3]}
        radius="15">
        </Button>


        </View>





  

      </View>
  
      </ImageBackground>
  </View>
  </ScrollView>
  </SafeAreaView>

      );


    if (currentView === "lesson") {
        return (base)
    }
    else {
        return (quiz)
    }



  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
        paddingTop: 24,
        backgroundColor: "#ffffff",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height

    },
    main: {
        flex: 1,
        alignItems:"center",
        marginTop:"10px",
        maxWidth: 960,
    
        width: Dimensions.get('window').width
    },
    title: {
        fontSize: 64,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 36,
        color: "#38434D",
    },
    header: {
        color:"#6b53ff",
        marginLeft:"10%",
        alignSelf:"flex-start",
        flex:1,
        fontWeight:"bold"
        
        
    },
    topBar: {
       
        flexDirection:"row",
        width: "100%",
        marginBottom:100
    },
    topLeftIcon: {
        flex:1,
        alignSelf:"flex-start"
    },
    userPanelStyle: {
        backgroundColor:"#ffffff",
        flexDirection:"row",
        width: "100%",
        height:"15%"
    },
    userName : {
        color:"white",
        paddingBottom:0
    },
    joinedText : {
        color:"grey",
        flex:1,
        paddingTop:0
    },
    contentText: {
        color:"black",
        marginLeft:"10%",
        width:"80%",
        alignSelf:"flex-start",
        fontSize:20,
        textAlign:"center",
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 8,
        height:60,
        overflow:"hidden"
    },
    scrollView : {
        marginHorizontal:0,
        height: Dimensions.get('window').height
    },
    SafeAreaView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    answerButton:{
        padding:5,
        radius:10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    buttonContainer: {
        alignContent:"center",
        flex:1,
        flexDirection:"column",
        gap:15,
        marginTop:50   
    },
    questionBox: {
    
    }
    

});


export default Lesson;