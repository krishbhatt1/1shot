import React from 'react'
import DatamapsIndia from 'react-datamaps-india'
import college from '../college.json'

var lookup = {};
var items = college;
var result = [];

for (var item, i = 0; item = items[i++];) {
  var state = item.state;
  // var value = 0;

  if (!(state in lookup)) {
    lookup[state] = 1;
    result.push(state);
  } else {
    lookup[state]++;
  }
}

// console.log(lookup);
// console.log(result);






const Map = () => {
  return (
    <DatamapsIndia
      regionData={{
        "Bihar": { value: 1 },
        "Andhra Pradesh": { value: 1 },
        "Arunachal Pradesh": { value: 6 },
        "Chhattisgarh": { value: 4 },
        "Goa": { value: 2 },
        "Gujarat": { value: 4 },
        "Haryana": { value: 3 },
        "Jharkhand": { value: 5 },
        "Karnataka": { value: 4 },
        "Kerala": { value: 5 },
        "Madhya Pradesh": { value: 3 },
        "Maharashtra": { value: 6 },
        "Manipur": { value: 5 },
        "Meghalaya": { value: 4 },
        "Mizoram": { value: 5 },
        "Nagaland": { value: 5 },
        "Odisha": { value: 8 },
        "Punjab": { value: 6 },
        "Rajasthan": { value: 3 },
        "Tamil Nadu": { value: 2 },
        "Telangana": { value: 2 },
        "Tripura": { value: 1 },
        "Uttar Pradesh": { value: 4 },
        "Uttarakhand": { value: 4 },
        "West Bengal": { value: 7 },
      }}

      hoverComponent={({ value }) => {
        return (
          <>
            <p>{value.name}</p>
            <p>{value.value}</p>
          </>
        )
      }}
      mapLayout={{
        // title: 'Title',
        legendTitle: 'Legend Title',
        startColor: '#FFDAB9',
        endColor: '#FF6347',
        hoverTitle: 'Count',
        noDataColor: '#f5f5f5',
        borderColor: '#8D8D8D',
        hoverBorderColor: '#8D8D8D',
        hoverColor: 'green',
      }}
    />
  )
}

export default Map