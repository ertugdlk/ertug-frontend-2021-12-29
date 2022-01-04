import {
    Button,
    Grid,
    styled,
    TextField,
    Snackbar,
    SnackbarContent,
} from "@material-ui/core"
import { useState } from "react"
import SearchService from "../../services/search"

const SearchTextArea = styled(TextField)({
    color: "black",
    width: "250px",

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
    const [alert, setAlert] = useState(false)
    const [errorText, setErrorText] = useState("")

    const handleSearchTextChange = async (e) => {
        const value = e.target.value
        setSearchText(value)
    }

    const handleSearchClick = async (e) => {
        setText(searchText)
        if (searchText == "") {
            setErrorText("Search text is empty")
            setAlert(true)
            return
        }
        const data_ = await SearchService.getResults(searchText)
        if (data_.length == 0) {
            setErrorText("No Results")
            setAlert(true)
            return
        }
        if (data_) {
            setData(data_)
        }
    }

    return (
        <>
            <Snackbar
                open={alert}
                autoHideDuration={1500}
                onClose={() => setAlert(false)}
            >
                <SnackbarContent
                    style={{
                        backgroundColor: "red",
                    }}
                    message={errorText}
                />
            </Snackbar>
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
        </>
    )
}
