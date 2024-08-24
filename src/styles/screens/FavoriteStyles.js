import {StyleSheet} from 'react-native';

const favoritesStyles = StyleSheet.create({
  listContainer: {
    paddingTop: 0,
    marginTop: 0,
    paddingHorizontal: 0,
  },
  cardWrapper: {
    width: '50%',
    margin: 0,
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
    padding: 3,
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
    fontFamily: 'Poppins-Regular',
  },
  cardText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'left',
    marginLeft: 5,
    marginBottom: 5,
    fontFamily: 'Poppins-Bold',
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
    backgroundColor: '#120b34',
    borderRadius: 15,
    padding: 5,
    zIndex: 1,
  },
});

export default favoritesStyles;
