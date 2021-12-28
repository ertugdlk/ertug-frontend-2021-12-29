import logo from "./logo.svg"
import SearchItems from "./components/search/searchItems"
import SearchBox from "./components/search/searchBox"
import "./App.css"
import { Grid, styled } from "@material-ui/core"
import { useState, useEffect } from "react"
import SearchService from "./services/search"
import image from "./assets/intelistyle.png"

const MainGrid = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "tale",
})

const SearchBoxGrid = styled(Grid)({
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
})

function App() {
    const [page, setPage] = useState(0)
    const [searchData, setSearchData] = useState([])
    const [text, setText] = useState("")

    const setData = (value) => {
        setSearchData(value)
    }

    const fetchMoreSearchData = async () => {
        setPage(page + 1)
        const page_ = page.toString()
        const new_data = await SearchService.getResults(text, page_)
        setSearchData(searchData.concat(new_data))
    }

    useEffect(() => {})

    return (
        <>
            <MainGrid>
                <SearchBoxGrid>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {" "}
                        <img
                            style={{
                                width: "90px",
                            }}
                            src={require("./assets/intelistyle.png")}
                        ></img>{" "}
                        <span
                            style={{
                                marginTop: "35px",
                                marginLeft: "5px",
                                fontSize: "22px",
                            }}
                        >
                            Search
                        </span>
                    </div>
                    <SearchBox setText={setText} setData={setData}></SearchBox>
                </SearchBoxGrid>
                <SearchItems
                    searchData={searchData}
                    fetchMoreSearchData={() => fetchMoreSearchData()}
                ></SearchItems>
            </MainGrid>
        </>
    )
}

export default App
