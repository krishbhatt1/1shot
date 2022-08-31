import React from 'react'

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

const Statelist = () => {
  return (
    <div>
      
    </div>
  )
}

export default Statelist