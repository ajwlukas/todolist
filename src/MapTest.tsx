//MapTest.tsx

const MapTest = () =>{
const fruits = ['apple', 'banana', 'orange'];


    return (<div>
        <h2>과일</h2>
        <ul>
            {
                fruits.map((fruit, index) => {
                    return (<li key={index}>{fruit}</li>);
                })
            }
        </ul>
    </div>)
}



export default MapTest;