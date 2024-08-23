import {StyleSheet} from 'react-native';

const accountScreenStyles = StyleSheet.create({
  container: {
    marginTop: '30%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    marginBottom: 15,
    color: '#fff',
  },
  pfpStyle: {
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  text: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 5,
    fontFamily: 'Poppins-SemiBold',
  },
  subtitles: {
    fontSize: 13,
    color: '#f5f5f5',
    marginBottom: 20,
    fontFamily: 'Poppins-Regular',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  card: {
    width: '45%',
    borderRadius: 15,
    backgroundColor: '#120b34',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 5,
    borderColor: 'transparent',
  },
  iconContainer: {
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  formContainer: {
    paddingHorizontal: 20,
    width: '100%',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  cardFavorites: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '200%',
  },
});

export default accountScreenStyles;
