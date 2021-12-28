import { Button, Grid, styled, TextField } from "@material-ui/core"
import { useState } from "react"
import SearchService from "../../services/search"

const SearchTextArea = styled(TextField)({
    color: "black",
    width: "40vh",

    "& .MuiInput-underline:before": {
        borderBottomColor: "white",
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "black",
    },

    display: "flex",
})

const MainGrid = styled(Grid)({
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
})

const SearchButton = styled(Button)({
    "&:hover": {
        boxShadow: "8px -3px teal",
        textShadow: "1px 1px",
    },
    marginTop: "10px",
})

export default function SearchBox(props) {
    const { setData, setText } = props
    const [searchText, setSearchText] = useState("")

    const handleSearchTextChange = async (e) => {
        const value = e.target.value
        setSearchText(value)
        setText(value)
    }

    const handleSearchClick = async (e) => {
        console.log(e)
        const data_ = await SearchService.getResults(searchText)
        if (data_) {
            setData(data_)
        }
    }

    return (
        <MainGrid>
            <SearchTextArea
                InputProps={{}}
                onChange={(e) => handleSearchTextChange(e)}
                placeholder="eg. black hat"
                sx={{
                    input: {
                        color: "white",
                        background: "#001B36",
                    },
                }}
                color="primary"
                onKeyUp={async (e) => {
                    if (e.keyCode == 13) await handleSearchClick()
                }}
            ></SearchTextArea>
            <SearchButton onClick={() => handleSearchClick()}>
                {" "}
                Search{" "}
            </SearchButton>
        </MainGrid>
    )
}
