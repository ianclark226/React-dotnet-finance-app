import React, { useEffect, useState } from 'react'
import StockCommentForm from './StockCommentForm'
import { commentGetAPI, commentPostAPI } from '../../services/CommentService'
import { toast } from 'react-toastify'
import { CommentGet } from '../../models/Comment'
import Spinner from '../spinner/Spinner'
import StockCommentList from '../stock-comment-list/StockCommentList'

type Props = {
    stockSymbol: string
}

type CommentFormInputs = {
    title: string
    content: string

}


const StockComment = ({stockSymbol} : Props) => {

    const [comments, setComments] = useState<CommentGet[] | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getComments()
    }, [])

    const handleComment = (e: CommentFormInputs) => {
        commentPostAPI(e.title, e.content, stockSymbol)
        .then((res) => {
            if(res) {
                toast.success("Comment created Successfully!")
                getComments()
            }
        }).catch((e) => {
            toast.warning(e)
        })
    }

    const getComments = () => {
        setLoading(true)
        commentGetAPI(stockSymbol)
        .then((res) => {
            setLoading(false)
            setComments(res?.data!)
        })
    }

  return (
    <div className='flex flex-col'>
        {loading ? <Spinner/> : <StockCommentList comments={comments!}/>}
    <StockCommentForm symbol={stockSymbol} handleComment={handleComment}/>
    </div>
  )
}

export default StockComment