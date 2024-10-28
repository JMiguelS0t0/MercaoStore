import {StyleSheet} from 'react-native';

const CardStyles = StyleSheet.create({
  listContainer: {
    paddingTop: 0,
    marginTop: 0,
    paddingHorizontal: 5,
  },
  cardWrapper: {
    width: '49%',
    margin: 5,
  },
  cardContainer: {
    borderWidth: 0,
    backgroundColor: '#fcfcfc',
    borderRadius: 15,
    flex: 1,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginLeft: 0,
  },
  imageContainer: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 15,
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 15,
  },
  cardTitle: {
    fontSize: 15,
    color: '#000',
    textAlign: 'left',
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 0,
    fontFamily: 'Poppins-Regular',
  },
  cardText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
    marginLeft: 7,
    marginBottom: 5,
    fontFamily: 'Poppins-Bold',
  },
  cardsContainer: {
    paddingBottom: 100,
    marginTop: 90,
    flexGrow: 1,
  },
  heartIcon: {
    position: 'absolute',
    bottom: 10,
    right: 8,
    backgroundColor: 'rgba(166, 164, 164, 0.8)',
    borderRadius: 15,
    padding: 5,
    zIndex: 1,
  },
  offerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 3,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#000',
    marginRight: 5,
  },
  offerPrice: {
    color: 'red',
    fontFamily: 'Poppins-Bold',
  },
});

export default CardStyles;
