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
    color: '#000',
  },
  pfpStyle: {
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  text: {
    fontSize: 20,
    color: '#000',
    marginBottom: 5,
    fontFamily: 'Poppins-SemiBold',
  },
  subtitles: {
    fontSize: 13,
    color: '#000',
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
    marginHorizontal: 5,
    borderColor: 'transparent',
    margin: 10,
  },
  iconContainer: {
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#000',
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
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardLogout: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '60%',
    height: 100,
  },
  cardButton: {
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  upload: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    marginBottom: 10,
  },
});

export default accountScreenStyles;
