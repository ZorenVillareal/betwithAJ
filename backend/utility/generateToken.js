import jwt from 'jsonwebtoken'

const generateToken = ( res, userID) => {
  const token = jwt.sign({ userId}, process.env.JWT_SECRET, {

  })
}