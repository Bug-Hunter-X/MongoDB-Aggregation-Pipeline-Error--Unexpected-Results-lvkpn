```javascript
// Corrected aggregation pipeline
db.collection.aggregate([
  { $match: { field: 'value' } },
  { $group: { _id: '$anotherField', count: { $sum: 1 } } },
  { $sort: { count: -1 } }
])
```