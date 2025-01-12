import React from 'react'
import { CommentGet } from '../../models/Comment'
import StockCommentListItem from '../stock-comment-list-item/StockCommentListItem'

type Props = {
    comments: CommentGet[]
}

const StockCommentList = ({comments}: Props) => {
  return (
    <>
    {comments ?  comments.map((comment) => {
        return <StockCommentListItem comment={comment} />
    })
    : ""}

    </>
  )
}

export default StockCommentList