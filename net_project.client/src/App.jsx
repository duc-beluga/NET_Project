import { useEffect, useState } from 'react';

function App() {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        populateHeroData();
    }, []);

    return (
        <div className="flex justify-center items-center">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Place</th>
                        </tr>
                    </thead>
                    <tbody>
                        {heroes.map(hero => (<tr key={ hero.Name}>
                            <td>{ hero.name}</td>
                            <td>{ hero.firstName}</td>
                            <td>{ hero.lastName}</td>
                            <td>{ hero.place}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
    
    async function populateHeroData() {
        const response = await fetch('api/SuperHero');
        const data = await response.json();
        setHeroes(data);
        console.log(data)
    }
}

export default App;