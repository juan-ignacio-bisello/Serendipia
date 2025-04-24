import { useDispatch, useSelector } from 'react-redux'

export const useAuthStore = () => {
    const {} = useSelector( status => status.auth );
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {
        
    }


  return (
    <div>useAuthStore</div>
  )
}
