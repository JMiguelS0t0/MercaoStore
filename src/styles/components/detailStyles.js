import {StyleSheet} from 'react-native';

const detailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: '30%',
    paddingBottom: 100,
  },
  imageContainer: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginBottom: 20,
    height: 200,
    paddingTop: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  price: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'left',
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'left',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 25,
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  heartIcon: {
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 15,
    padding: 8,
    zIndex: 1,
  },
  dividerStyle: {
    marginVertical: 8,
    color: 'rgba(255, 255, 255, 0.1)',
  },
  horizontalCardContainer: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    alignItems: 'flex-start',
    width: 200,
    marginHorizontal: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'left',
  },
});

export default detailStyles;
