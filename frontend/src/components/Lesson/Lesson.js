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

    [currentView, setView] = useState("lesson");
    [success, setSucces] = useState(undefined);
    [answer1, set1] = useState(false);
    [answer2, set2] = useState(false);
    [answer3, set3] = useState(false);
    [answer4, set4] = useState(false);

    const tog1 = () => {
        set1(!answer1);
    }

    const tog2 = () => {
        set2(!answer2);
    }

    const tog3 = () => {
        set3(!answer3);
    }

    const tog4 = () => {
        set4(!answer4);
    }




    const gotoQuiz = () => {
        setView("quiz");
    }

    const gotoLesson = () => {
        setView("lesson");
    }

    const submit = () => {
        var succString = "";
        


    }


    const testFire = () => {
        const q = query(collection(db, "Path1/Path1/Module1.1"))
        const docs = getDocs(q).then((docs) => {
  
            docs.forEach((x) => {
                alert(JSON.stringify(x.data()));
              })
        }) ; 
    }



    useEffect(() => {
    }, [answer1, answer2, answer3, answer4]);


    const base = (   <SafeAreaView style={styles.SafeAreaView}>

        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
          <ImageBackground
    source={require("../../assets/quiz_background.png")} resizeMode='cover' style={{flex:1, width:"100%", height:"100%", alignItems:"center"}}>
  
          <View style={styles.topBar}>
  
                  <Text h3Style={styles.header} h3>
                          {props.info.name}
                  </Text>
     
              </View>
              <View style={styles.main}>
                  
              <View style={styles.contentBox}>    
              <Text h3Style={styles.contentText} h3 adjustsFontSizeToFit={true}>
                  {props.info.text}
                  </Text>
                </View>
                <Button color="#ffffff" 
        titleStyle={{color:"black"}}
        style={styles.answerButton} 
        title={"Apply your knowledge!"}
        onPress={gotoQuiz}
        radius="15">
        </Button>
 
          
  
              </View>
        </ImageBackground>
          </View>
          </ScrollView>
          </SafeAreaView>
      );

//#6b53ff
      const quiz = (
<SafeAreaView style={styles.SafeAreaView}>

<ScrollView contentContainerStyle={{flexGrow:1}} style={styles.scrollView}>

  <View style={styles.container}>
  <ImageBackground
    source={require("../../assets/quiz_background.png")} resizeMode='cover' style={{flex:1, width:"100%", height:"100%",  backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', alignItems:"left"}}>



  <Button color="#ffffff" 
        titleStyle={{color:"black"}}
        style={        {padding:5,
            radius:10,
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.3,
            shadowRadius: 3, width:"40%", marginBottom:40}}
        title={"<<"}
        onPress={gotoLesson}
        radius="15">
        </Button>

 
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
        color={answer1 ? "#bbbbbb" : "#ffffff"}
        style={styles.answerButton} 
        title={props.info.answers[0]}
        radius="15"
        onPress={tog1}>
        </Button>
        <Button 
        color={answer2 ? "#bbbbbb" : "#ffffff"}
        titleStyle={{color:"black"}}
        style={styles.answerButton} 
        title={props.info.answers[1]}
        radius="15"
        onPress={tog2}>
        </Button>
        <Button 
        color={answer3 ? "#bbbbbb" : "#ffffff"}
        titleStyle={{color:"black"}}
        style={styles.answerButton} 
        title={props.info.answers[2]}
        radius="15"
        onPress={tog3}>
        </Button>
        <Button 
        color={answer4 ? "#bbbbbb" : "#ffffff"}
        titleStyle={{color:"black"}}
        style={styles.answerButton} 
        title={props.info.answers[3]}
        radius="15"
        onPress={tog4}>
        </Button>


        <Button color="#ffffff" 
        titleStyle={{color:"black"}}
        style={        {padding:5,
            radius:10,
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.3,
            shadowRadius: 3, width:"50%", marginBottom:40}}
        title={"Submit"}
        onPress={submit}
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
        alignItems:"center"

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
        color:"#000000",
        marginLeft:"10%",
        alignSelf:"flex-start",
        flex:1,
        fontWeight:"bold"
        
        
    },
    topBar: {
       
        flexDirection:"row",
        width: "80%",
        marginBottom:100,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 8,
        backgroundColor:"#ffffff",
        borderRadius:10,
        marginTop:20
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
    quizText: {
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
    contentText: {
        color:"black",
        marginLeft:"10%",
        width:"80%",
        alignSelf:"flex-start",
        fontSize:20,
        textAlign:"center"
    },
    scrollView : {
        marginHorizontal:0
    },
    SafeAreaView: {
        width: Dimensions.get('window').width
    },
    answerButton:{
        padding:5,
        radius:10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        width:200
    },
    buttonContainer: {
        flex:1,
        flexDirection:"column",
        gap:15,
        marginTop:50,
        alignItems:"center"   
    },
    contentBox: {
        backgroundColor:"#ffffff",
        width:"80%",
        borderRadius:20
    },
    buttonSelected: {
        padding:5,
        radius:10,
        shadowColor: '#555555',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        width:200
    }
    

});


export default Lesson;