import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    articleList: null,
    article: null,
}


const article = createSlice({
    name: 'article',
    initialState,
    reducers: {
        setArticleList(state, action) {
            state.articleList = action.payload
        },
        setArticle(state, action){
            state.article = action.payload;
        },
        setAllArticles(state, action){
            state.allArticles = action.payload;
        },
        setTotalArticles(state, action){
            state.totalArticles = action.payload;
        },
        setCurrentPage(state, action){
            state.currentPage = action.payload;
        },
        setAllArticleLoaded(state, action){
            state.allArticleLoaded = action.payload;
        }
    }
})

export const {
    setArticleList,
    setArticle,
    setAllArticles,
    setTotalArticles,
    setAllArticleLoaded,
    setCurrentPage
} = article.actions;

export default article.reducer
