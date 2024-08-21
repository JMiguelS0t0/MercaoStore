import {StyleSheet} from 'react-native';

const CardStyles = StyleSheet.create({
  listContainer: {
    paddingTop: 0,
    marginTop: 0,
    paddingHorizontal: 5,
  },
  cardWrapper: {
    width: '48%',
    margin: 5,
  },
  cardContainer: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    shadowColor: 'transparent',
    flex: 1,
    padding: 0,
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
    color: '#fff',
    textAlign: 'left',
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 0,
    fontFamily: 'Lato-Regular',
  },
  cardText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'left',
    marginLeft: 5,
    marginBottom:5,
    fontFamily: 'Lato-Bold',
  },
  cardsContainer: {
    paddingBottom: 100,
    marginTop: 100,
    flexGrow: 1,
  },
  heartIcon: {
    position: 'absolute',
    bottom: 10,
    right: 8,
    backgroundColor: 'rgba(66, 66, 66, 0.6)',
    borderRadius: 15,
    padding: 5,
    zIndex: 1,
  },
});

export default CardStyles;
