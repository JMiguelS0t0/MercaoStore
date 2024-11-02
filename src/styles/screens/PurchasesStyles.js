import {StyleSheet} from 'react-native';

const purchasesStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    paddingHorizontal: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  progressBar: {
    marginTop: 10,
    width: '100%',
  },
  barContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 20,
  },
});

export default purchasesStyles;
