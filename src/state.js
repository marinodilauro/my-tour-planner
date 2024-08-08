import { reactive } from 'vue';

// Function to format date
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Global state
export const state = reactive({

  // State data
  travels: [
    /*     {
          name: "Roma Tour",
          start_date: formatDate(new Date()),
          end_date: formatDate(new Date()),
          destination: "Roma"
        },
        {
          name: "Venezia Getaway",
          start_date: formatDate(new Date()),
          end_date: formatDate(new Date()),
          destination: "Venezia"
        },
        {
          name: "Milano Shopping",
          start_date: formatDate(new Date()),
          end_date: formatDate(new Date()),
          destination: "Milano"
        },
        {
          name: "Firenze Art Tour",
          start_date: formatDate(new Date()),
          end_date: formatDate(new Date()),
          destination: "Firenze"
        },
        {
          name: "Napoli Food Adventure",
          start_date: formatDate(new Date()),
          end_date: formatDate(new Date()),
          destination: "Napoli"
        } */
  ]

})