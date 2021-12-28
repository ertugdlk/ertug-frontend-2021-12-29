import { Grid, styled } from "@material-ui/core"
import SearchItem from "./seachItem"
import InfiniteScroll from "react-infinite-scroll-component"
import { useState } from "react"

const ItemGrid = styled(Grid)({
    marginTop: "50px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
})

export default function SearchItems(props) {
    const { searchData, fetchMoreSearchData } = props
    const [loader, setLoader] = useState(false)

    const handleData = () => {
        return searchData.map((data, index) => {
            if (data) {
                return (
                    <>
                        <SearchItem data={data} index={index}></SearchItem>
                    </>
                )
            }
        })
    }

    const handleNext = async () => {
        setLoader(true)
        await fetchMoreSearchData()
        setLoader(false)
    }
    /*
    return <ItemGrid>{handleData()}</ItemGrid>
    */

    const handleMessage = () => {
        if (searchData.length != 0) {
            return <span>No more results found</span>
        } else {
            return
        }
    }

    return (
        <InfiniteScroll
            dataLength={searchData.length}
            next={() => {
                if (searchData.length != 0) handleNext()
            }}
            hasMore={true}
        >
            <ItemGrid>{handleData()}</ItemGrid>
            {loader ? <h4>Loading...</h4> : handleMessage()}
        </InfiniteScroll>
    )
}
