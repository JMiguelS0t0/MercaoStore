import {StyleSheet} from 'react-native';

const ratingStyles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  ratingContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  averageRating: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
  ratingBar: {
    paddingVertical: 10,
  },
  ratedMessage: {
    color: '#7b5bbd',
    marginTop: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  ratePrompt: {
    color: '#666',
    marginTop: 10,
    fontSize: 14,
  },
  totalRatings: {
    marginTop: 5,
    fontSize: 12,
    color: '#888',
  },
});

export default ratingStyles;
