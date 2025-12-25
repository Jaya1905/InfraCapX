import { useOutletContext } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { activitiesData } from "../../utils/constants";

const Teams = () => {
    const { toggleSidebar, sidebarCollapsed } = useOutletContext();

    return (
      <div className="flex flex-col lg:flex-row h-screen bg-gray-50">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          {/* Page Header */}
          <div className="px-6 py-4">
            <div className="flex items-center gap-2">
              <button
                onClick={toggleSidebar}
                className="hidden lg:flex p-1 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
              >
                {!sidebarCollapsed ? (
                  <MdMenuOpen size={30} />
                ) : (
                  <img src="./open.png" width={25} height={25} />
                )}
              </button>
              <h1 className="text-2xl font-bold text-gray-900">Teams</h1>
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="flex-1 bg-white px-3 sm:px-6 py-4 overflow-auto">
            <div className="max-w-7xl mx-auto">
              {activitiesData.map((dayGroup) => (
                <div key={dayGroup.id} className="mb-6">
                  {/* Date Header */}
                  <div className="flex items-center mb-3">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {dayGroup.date}
                    </h2>
                  </div>

                  {/* Activities for this date */}
                  <div className="space-y-2">
                    {dayGroup.activities.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        {/* Activity Content */}
                        <div className="flex-1 min-w-0 flex justify-between items-start">
                          <p className="text-gray-900 text-base leading-snug flex items-center flex-wrap">
                            {/* User badge at start */}
                            {activity.start && activity.user && (
                              <span className="inline-flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-full mr-1 shrink-0">
                                <img
                                  src={activity.avatar}
                                  alt={activity.user}
                                  className="w-5 h-5 rounded-full"
                                />
                                <span className="font-medium text-sm">
                                  {activity.user}
                                </span>
                              </span>
                            )}

                            {/* Message before highlight */}
                            <span className="mr-1">{activity.message}</span>

                            {/* Highlighted room/project name */}
                            {activity.highlight && (
                              <span className="font-semibold text-gray-900 mr-1">
                                {activity.highlight}
                              </span>
                            )}

                            {/* Suffix after highlight */}
                            {activity.suffix && (
                              <span className="mr-1">{activity.suffix}</span>
                            )}

                            {/* User badge at end */}
                            {!activity.start && activity.user && (
                              <span className="inline-flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-full ml-1 shrink-0">
                                <img
                                  src={activity.avatar}
                                  alt={activity.user}
                                  className="w-4 h-4 rounded-full"
                                />
                                <span className="font-medium text-sm">
                                  {activity.user}
                                </span>
                              </span>
                            )}
                          </p>

                          {/* Timestamp */}
                          <span className="text-gray-500 text-sm ml-2 shrink-0">
                            {activity.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Teams;
