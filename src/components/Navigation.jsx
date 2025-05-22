import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navigation() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (currentUser) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">Gopi</span>
            </Link>
          </div> */}
          
          <div className="flex items-center">
            {/* <button
              onClick={handleProfileClick}
              className="ml-4 p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
                <span className="text-sm text-white">
                  {currentUser?.email?.[0].toUpperCase() || '?'}
                </span>
              </div>
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 