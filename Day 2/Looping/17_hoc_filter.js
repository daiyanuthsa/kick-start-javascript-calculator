const hobbies = ["reading", "coding", "traveling", "hiking"];

const filteredHobbies = hobbies.filter((hobby) => {
  return hobby == "traveling" || hobby == "hiking"
})

console.log(filteredHobbies)