import {StyleSheet, Dimensions} from 'react-native';
import * as Font from 'expo-font';

const splash = StyleSheet.create({
  box: {
        flex: 1,
        backgroundColor: 'pink',
        width: '100%',
        height: '100%',
        position: 'relative'

      }
});

const boardingCSS = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink'
  }
})

var { width, height } = Dimensions.get("window");


const personalCSS = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  box1: {
    flex: 1,
    backgroundColor: 'green'

  },
  bottomBar: {
    height: 60,
    // backgroundColor: "#000000b0"
  },
  box2: {
    marginTop: 20
  },
  intakeBox: {
    marginTop: 30,
    textAlign: 'justify',
    backgroundColor: 'pink'
  },

  parameters_view: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(248,248,248, 0.8)',

    // shadowOffset: {
    //     width: 5,
    //     height: 10
    // },
    // shadowOpacity: 1,
    // shadowRadius: 9,
    // shadowColor: '#E0E0E0'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'#00CCFF',
    textAlign: "center",
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2,
    marginTop: 20

  },
  parameters_text: {
    padding: 10,
    fontSize: 25,
  },
  // topShadow:{
  //   shadowOffset: {
  //       width: -1,
  //       height: -1
  //   },
  //   shadowOpacity: 1,
  //   shadowRadius: 9,
  //   shadowColor: '#FBFFFF'
  //   },
  //   bottomShadow:{
  //       shadowOffset: {
  //           width: 1,
  //           height: 1
  //       },
  //       shadowOpacity: 1,
  //       shadowRadius: 9,
  //       shadowColor: '#E0E0E0'
  //   },
})

const picker = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerContainer : {
    height: 350,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 30,
    color: 'white',
    padding: 5
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    color: 'white'
  },
  txt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#04303d'
  },
  imgContainer: {
    marginLeft: 15
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 40,
    shadowOffset: {
      width: 1,
      height: 4
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: '#B7C4DD',
    marginLeft: 5
  },
  inputBox: {
    marginRight: 20,
    // borderWidth: 1,
    // borderColor: 'rgba(248,248,248, 0.8)'

  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#00CCFF',
    width: 90,
    height: 40,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 24,
    color:'white'
  },
  switchBox: {
    marginRight: 25
  },
  switch: {
    marginLeft: 5,
    transform:[{ scaleX: 1.1  }, { scaleY: 1.1 }]
  },
})

const intakeCSS = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    // flexDirection: 'column'
  },
  Box1: {
    backgroundColor: 'green'
  },
  Box2: {
    backgroundColor: 'pink'
  },

  textBox: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'lightblue',
    width: '100%'
  },
  bottomBar: {
    height: 60,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'#00CCFF',
    textAlign: "center",
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2,
    marginVertical: 30,
    marginLeft: 30,
    alignSelf: 'flex-start',
  }
})


export {splash, boardingCSS, personalCSS, picker, intakeCSS};

