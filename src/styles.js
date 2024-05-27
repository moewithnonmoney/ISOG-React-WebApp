import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: "#FFFFFF",
        borderStyle: 'solid',
        borderWidth: 7,
        borderColor: "rgba(205, 172, 47, 1.0)"
      },
    
      layout:{
        display: 'flex',
        flexDirection: 'row'
      },
    
      headerSection1: {
        width: 231, 
        display: 'flex', 
        alignItems: 'center',
        marginTop: 5
      },
    
      headerSection2: {
        width: 625,
        height: 75,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        position: 'absolute', 
        left: '17.5%',
        top: 10
      },
    
      headerFont:{
        fontFamily: 'Jomhuria',
        fontSize: 60,
        lineHeight: 65,
        color: '#00003E',
      },
    
      headerFont2:{
        fontFamily: 'Jomhuria',
        fontSize: 50,
        marginTop: -30,
        color: '#00003E',
      },
    
      ISOGText: {
        fontFamily: "Jomhuria",
        fontSize: 34,
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: 33,
        textAlign: "center",
        color: "#00003E",
        marginLeft: 10
      },
    
      logo:{
        width: 83,
        height: 71
        
      },
    
      announcementsHeader:{
        width: 325,  
        marginTop: -8,
        fontFamily: "Inknut Antiqua",
        fontSize: 20,
        fontWeight: "400",
        fontStyle: "normal", 
        textAlign: "center",
        color: "#00003E",
      },
      annoucnementsHeaderContainer:{
        width: 325,
        height: 30, 
        backgroundColor: "#CDAC2F",
        marginLeft: 5
      },
    
      announcementsContainer:{
        width: 325,
        height: 200,
        backgroundColor: "#00003E",
        marginLeft: 5,
        display: 'flex',
        alignItems: 'center',
        color: 'white'
      },
    
      announcements:{
        color: 'white',
        marginLeft: 8,
        fontSize: 20
      },

      announcements1:{
        color: 'white',
        marginLeft: 8,
        fontSize: 20
      },
    
      boxes:{
        display:'flex',
        flexDirection: 'row',
        width: '70%',
        maxWidth: '70%'
      },
    
      reminderBoxes:{
        display:'flex',
        flexDirection: 'row',
        width: '70%',
        marginTop: 5
      },
    
      reminder:{
        width: 325,
        marginLeft:5,
        fontFamily: "Inknut Antiqua",
        fontSize: 15,
        fontStyle: "normal",
        textAlign: "center",
        color: "#FFFFFF",
        backgroundColor: "#00003E"
      },
    
      prayerContainer:{
        width: 655,
        height: 110,
        marginLeft: 5,
        marginTop: 5,
        backgroundColor: "#00003E",
        display: 'flex',
        flexDirection: 'row'
      },

      upcomingPrayer:{
        backgroundColor: '#D9D9D9',
        marginTop: 0,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 23,
        marginRight: -10,
        color: 'black'
      },

      footer:{
        fontFamily: "Inter",
        fontSize: 18,
        fontWeight: "700",
        fontStyle: "normal",
        color: "#00003E",
        marginLeft: 82
      },
    
      prayerHeader:{
        marginTop: 36
      },
    
      iqamah:{
        marginTop: 18,
        color: 'white',
        width: 89,
        textAlign: 'center'
      },
    
      athan: {
        width: 89,
        textAlign: 'center',
        color: 'white'
      },
    
      prayers:{
        marginLeft: 33,
        marginTop: 10
      },
    
      prayerName:{
        color: 'white',
        width: 75,
        textAlign: 'center'
      },

      prayerName1:{
        color: '#00003E', 
        width: 75,
        fontWeight: '900',
        textAlign: 'center'
      },
    
      athanTime:{
        color: 'white',
        marginTop: 3,
        fontSize: 20
      },

      athanTime1: {
        color: '#00003E', 
        width: 75,
        fontWeight: '900',
        textAlign: 'center',
        marginTop: 3,
        fontSize: 20
      },
    
      prayerTimer:{
        color: 'white',
        marginTop: 8,
        fontSize: 20
      },

      prayerTimer1:{
        marginTop: 8,
        fontSize: 20,
        color: '#00003E',
        fontWeight: '900',
      },
    
      AMPM:{
        fontSize: 15,
        marginLeft: -10
      },

      AMPM2:{
        fontSize: 20
      },
    
      AMPM3:{
        fontSize: 14
      },

      HRMN: {
        fontSize: 24
      },
    
      border:{
        width: 250,
        height: 1, 
        backgroundColor: 'black',
        marginLeft: 4
      },

      border2:{
        width: 250,
        marginLeft:10,
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 17,
        height: 1, 
        backgroundColor: 'black'
      },


      dateContainer:{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
      },

      arabicDate:{
        color: '#000',
        fontFamily: 'Inter',
        fontSize: 20,
        marginTop: 15
      },

      englishDate:{
        color: '#000',
        fontFamily: 'Inter',
        fontSize: 20,
        marginBottom: 16
      },

      nextPrayer:{
        marginTop: 17,
        textAlign: 'center',
      },

      nextPrayerNull: {
        marginTop: 80
      },

      nextPrayerText:{
        fontSize: 24,
        marginBottom: 10,
        textTransform: 'uppercase',
        textAlign: 'center',
      },

      countDown:{
        fontSize: 40,
        marginLeft: 3,
        textAlign: 'center',
      },

      hour:{
        fontSize: 20,
      },

      minute:{
        fontSize: 20,
      },

      jumuahHeader:{
        width: 250,
        height: 42,
        fontFamily: "Inter",
        fontSize: 24,
        fontWeight: "400",
        fontStyle: "normal", 
        color: "#000000",
        textAlign: 'center',
        marginLeft: 12
      },

      jumuah: {
        marginLeft: 17,
        display: 'flex',
        flexDirection: 'row',
      },

      startContainer: {
        marginRight: 49
      },

      jumuahPrayer:{
        fontSize: 27
      },

      jumuahPrayerDetail:{
        fontSize: 20,
        textAlign: 'center',
        marginTop: -5
      },

      fastingContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#00003E',
        width: 220,
        marginLeft: 30,
        height: 80,
        marginTop: 4
      },

      suhoorAthan:{
        color: 'white',
        textAlign: 'center',
        fontSize: 22,
        marginTop: -5
      },

      suhoor: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        marginTop: -8
      },

      iftarAthan: {
        color: 'white',
        textAlign: 'center',
        fontSize: 22,
        marginTop: -4
      },

      iftar: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        marginTop: -8
      },

      sun:{
        width: 38,
        height: 28,
        marginLeft: 16
      },

      moon:{
        width: 38,
        height: 30,
        marginTop: -4,
        marginLeft: 16
      },

      ishraq: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: -2.5
      }
    
    
    
    
      
    })