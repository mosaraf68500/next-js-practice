import Card from "@/components/Card";
import Counter from "@/components/Counter/Counter";


const HomePage = async() => {
  const res=await fetch("http://localhost:5000/shoes");
  const shoes=await res.json();

  
  return (
    <div>
      <h1 className="text-center text-2xl">this is next js home page</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-4">
        {
          shoes.map(shoe=><Card key={shoe.id} shoe={shoe}></Card>)
        }
      </div>
      
    </div>
  );
};

export default HomePage;
