import { ifIphoneX } from 'react-native-iphone-x-helper'
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default{
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        ...ifIphoneX ({
            paddingBottom: 60,
        },{
            paddingBottom: 50,
        }),
    },
    signInBackgroundImg: {
        position: 'absolute',
        width: width,
        height: height,
        top: 0,
        left: 0,
    },
     header: {
        backgroundColor: 'transparent',
        elevation: 0,
        borderBottomWidth: 0,
        marginTop: 5
    },
    menuImg: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
        marginLeft: 15,
    },
    avatarImg: {
        width: 44,
        height: 44,
        resizeMode: 'stretch',
        borderRadius: 22,
        marginRight: 10
    },
    screentitle: {
        color: '#4a6187',
        fontFamily: "Lato-Bold",
        marginLeft: 5,
        ...ifIphoneX ({
            fontSize: 18,
        },{
            fontSize: 16,
        }), 
    },
    mainContainer: {
        width: width,
    },
    searchView: {
        height: 109,
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 35,
        paddingRight: 35 ,
    },
    searchBackgroundImg: {
        width: width,
        height: 109,
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    searchImg: {
        width: 20,
        height: 20,
        marginTop: -7,
        marginRight: 12
    },
    inputTxt: {
        flex: 1,
        color: '#4a6187',
        fontFamily: "Lato-Regular",
        paddingTop: 0,
        paddingBottom: 0,
        fontSize: 15,
        marginTop: -7,
    },
    listView: {
        paddingLeft: 25,
        paddingRight: 25,
        width: width - 50,
        marginTop: -10
    },
    rowView: {
        flexDirection: 'row',
        width: width - 50,
        height: 75,
        alignItems: 'center'
    },
    userImg: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        borderRadius: 30,
        marginRight: 20
    },
    nametxt: {
        color: '#4a6187',
        fontSize: 15,
        fontFamily: "Lato-Regular",
    },
    citytxt: {
        marginTop: 5,
        color: '#ccd1da',
        fontSize: 12,
        fontFamily: "Lato-Regular",
    },
    underLine: {
        position:  'absolute',
        bottom: 0,
        left: 80,
        width: width,
        height: 2,
        backgroundColor: 'white',
    }
}