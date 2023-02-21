import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { get_cv } from "../../redux/actions/cvActions.js"
import CVcard from "../CVcard/CVcard"

const CVlist = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(get_cv())
  }, [dispatch])

  const cv = useSelector((state) => state.cvReducer.cv);
  console.log(cv)

  return (
    <div
      className="cv"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {cv.map((cv) => (
        <CVcard cv={cv} key={cv._id} />
      ))}
    </div>
  )
}

export default CVlist