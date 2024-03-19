import type {userObject} from '../DummyData/chatusers'
import profile from '/App/profile.svg'

const Chatbox: React.FC<userObject> = (props) => {
  const {user} = props
  return (
    <div className="flex flex-row bg-gray-100 rounded-md m-2 p-2 border-2 border-gray-300 gap-2 overflow-hidden">
      <img src={profile} className="m-auto h-12 w-12 rounded-full"/>
      <div className="flex flex-col gap-1 w-5/6 px-2">
          <p> {user.name } </p>
          <p> {user.message}</p>
      </div>
    </div>
  )
}

export default Chatbox