import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    warper: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 3,
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#000',
        backgroundColor: '#bdbdbd',
        borderTopColor: '#ededed',
        borderRadius: 5,
        width: 290,
        height: 40,
    },
    addButton: {
       height: 30,
       width: 30,
       //paddingBottom: 10,
    },
})

export default styles;