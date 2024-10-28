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
    paddingBottom: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 22,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  price: {
    fontSize: 20,
    color: '#000',
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#000',
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  sectionText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconBackground: {
    backgroundColor: 'rgba(123, 91, 189, 0.5)',
    borderRadius: 20,
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  heartIcon: {
    right: 8,
    backgroundColor: 'rgba(123, 91, 189, 0.5)',
    borderRadius: 15,
    padding: 8,
    zIndex: 1,
  },
  horizontalCardContainer: {
    backgroundColor: '#fff',
    borderColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    alignItems: 'flex-start',
    width: 200,
    marginHorizontal: 8,
  },
  cardTitle: {
    fontSize: 15,
    color: '#000',
    textAlign: 'left',
    marginBottom: 5,
    fontFamily: 'Poppins-Bold',
  },
  cardText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },
  borderButton: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7b5bbd',
    marginVertical: 10,
    width: '100%',
    backgroundColor: '#7b5bbd',
  },
});

export default detailStyles;
