import { Grid, styled } from "@material-ui/core"
import { Garment } from "../../entities/garment"

const MainGrid = styled(Grid)({
    border: "solid black 2px",
    borderRadius: "10px",
    display: "flex",
    flex: "0 0 33%",
    width: "80%",
    justifyContent: "center",
    marginTop: "20px",
    flexDirection: "column",
    maxHeight: "600px",
    maxWidth: "350px",
    "&:hover": {
        boxShadow: "8px -3px teal",
        textShadow: "1px 1px",
    },
    cursor: "pointer",
})

const ImageGrid = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    maxHeight: "100%",
    maxWidth: "350px",
})

const ProductDetailGrid = styled(Grid)({
    fontSize: "1.5vh",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
})

export default function SearchItem(props) {
    const { data, index } = props
    const garment = new Garment(data)

    const handleItemClick = async () => {
        window.open(garment.url)
    }
    return (
        <MainGrid onClick={() => handleItemClick()}>
            {garment.image_urls ? (
                <>
                    {" "}
                    <ImageGrid style={{}}>
                        <Grid
                            style={{
                                display: "flex",
                            }}
                        >
                            {" "}
                            <img
                                style={{
                                    top: 0,
                                    maxHeight: "500px",
                                    maxWidth: "350px",
                                    borderRadius: "10px",
                                    width: "100%",
                                }}
                                src={garment.image_urls[0]}
                            ></img>{" "}
                        </Grid>
                    </ImageGrid>
                    <ProductDetailGrid>
                        <span>{garment.product_title}</span>
                        <span>
                            {garment.price + " " + garment.currency_code}
                        </span>
                    </ProductDetailGrid>
                </>
            ) : (
                <> </>
            )}
        </MainGrid>
    )
}
