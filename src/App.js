import logo from './logo.svg';
import './App.css';




let arr = [
        {
              id: 1,
              name: "ABC",
              category: "A",
              city: "Karachi",
            },
            {
                  id: 2,
      name: "MNO",
      category: "C",
      city: "Karachi",
    },
    {
          id: 3,
          name: "XYZ",
          category: "A",
          city: "Karachi",
        },
        {
              id: 4,
              name: "QWE",
              category: "A",
              city: "Lahore",
            },
            {
      id: 5,
      name: "TZR",
      category: "A",
      city: "Karachi",
    },
    {
          id: 6,
      name: "AMJ",
      category: "A",
      city: "Islamabad",
    },
    {
          id: 7,
          name: "LKO",
          category: "B",
          city: "Karachi",
        },
        {
              id: 8,
      name: "BAO",
      category: "A",
      city: "Karachi",
    },
    {
          id: 9,
          name: "PLK",
          category: "B",
          city: "Karachi",
        },
      ];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {arr.map((x,i) => {
          return(
            <div key={i} className='card'>
              <h3>{x.name}</h3>
              <p>{x.id}</p>
              <p>{x.category}</p>
              <p>{x.city}</p>
              </div>
          );
        })};
           </header>
    </div>
  );
}

export default App;
