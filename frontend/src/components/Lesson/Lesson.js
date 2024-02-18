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


      const quiz = (
<SafeAreaView style={styles.SafeAreaView}>

<ScrollView style={styles.scrollView}>
  <View style={styles.container}>


  <View style={styles.topBar}>

          <Text h3Style={styles.header} h3>
                  Quiz
          </Text>

      </View>
      <View style={styles.main}>
          


    
      <Text h3Style={styles.contentText} h3 adjustsFontSizeToFit={true}>
          {props.info.question}
          </Text>


        <View 
        style={styles.buttonContainer} id="buttons">
        <Button color="#6b53ff" 
        style={styles.answerButton} 
        title={props.info.answers[0]}
        radius="15">
        </Button>
        <Button color="#6b53ff" 
        style={styles.answerButton} 
        title={props.info.answers[1]}
        radius="15">
        </Button>
        <Button color="#6b53ff" 
        style={styles.answerButton} 
        title={props.info.answers[2]}
        radius="15">
        </Button>
        <Button color="#6b53ff" 
        style={styles.answerButton} 
        title={props.info.answers[3]}
        radius="15">
        </Button>


        </View>





  

      </View>

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
        width: Dimensions.get('window').width

    },
    main: {
        flex: 1,
        alignItems:"center",
        marginTop:"10px",
        maxWidth: 960,
        backgroundColor: "#ffffff",
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
        backgroundColor:"#ffffff",
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
        flex:1,
        fontSize:20,
        backgroundColor:"white",
        textAlign:"center",
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        borderRadius:10
    },
    scrollView : {
        marginHorizontal:0
    },
    SafeAreaView: {
        width: Dimensions.get('window').width
    },
    answerButton:{
        backgroundColor:"#6b53ff",
        padding:5,
        radius:10
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