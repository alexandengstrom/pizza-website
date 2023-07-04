import PictureBox from "../Components/PictureBox"
import ShortDescription from "../Components/ShortDescription"
import PictureBoxText from "../Components/ShortDescription"
import WineDescription from "../Components/WineDescription"
import BeerDescription from "../Components/BeerDescription"
import pizzasImage from "../Images/pizzas.jpg"
import WineImage from "../Images/wine.jpg"
import BeerImage from "../Images/beer.jpg"

function Home() {
    return (
        <>
        <PictureBox 
        image={pizzasImage}
        content={<ShortDescription />}
        left={true} 
        />
        <PictureBox 
        image={WineImage}
        content={<WineDescription />} 
        left={false}
        />
        <PictureBox 
        image={BeerImage}
        content={<BeerDescription />} 
        left={true}
        />
        </>
    )
}

export default Home