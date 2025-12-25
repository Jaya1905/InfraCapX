import { useOutletContext } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { activitiesData } from "../../utils/constants";

const Teams = () => {
  const { toggleSidebar, sidebarCollapsed } = useOutletContext();

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Page Header */}
      <div className="px-3 sm:px-6 py-3 sm:py-4 bg-white border-b border-gray-200 flex-shrink-0">
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
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
            Teams
          </h1>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="flex-1 bg-white px-3 sm:px-6 py-3 sm:py-4 min-h-0">
        <div className="max-w-4xl mx-auto h-full">
          <div className="space-y-4 sm:space-y-6">
            {activitiesData.map((dayGroup) => (
              <div key={dayGroup.id}>
                {/* Date Header */}
                <div className="flex items-center mb-3 sm:mb-4">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                    {dayGroup.date}
                  </h2>
                  <div className="flex-1 ml-3 sm:ml-4 border-t border-gray-200"></div>
                </div>

                {/* Activities for this date */}
                <div className="space-y-2 sm:space-y-3">
                  {dayGroup.activities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {/* Activity Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                          {/* Message Content */}
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-900 text-sm sm:text-base leading-relaxed">
                              {/* User badge at start */}
                              {activity.start && activity.user && (
                                <span className="inline-flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-full mr-1 mb-1 sm:mb-0 text-xs sm:text-sm">
                                  <img
                                    src={activity.avatar}
                                    alt={activity.user}
                                    className="w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                                  />
                                  <span className="font-medium">
                                    {activity.user}
                                  </span>
                                </span>
                              )}

                              {/* Message before highlight */}
                              <span className="mr-1">{activity.message}</span>

                              {/* Highlighted room/project name */}
                              {activity.highlight && (
                                <span className="font-semibold text-gray-900 mr-1 break-words">
                                  {activity.highlight}
                                </span>
                              )}

                              {/* Suffix after highlight */}
                              {activity.suffix && (
                                <span className="mr-1">{activity.suffix}</span>
                              )}

                              {/* User badge at end */}
                              {!activity.start && activity.user && (
                                <span className="inline-flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-full ml-1 mb-1 sm:mb-0 text-xs sm:text-sm">
                                  <img
                                    src={activity.avatar}
                                    alt={activity.user}
                                    className="w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                                  />
                                  <span className="font-medium">
                                    {activity.user}
                                  </span>
                                </span>
                              )}
                            </p>
                          </div>

                          {/* Timestamp - Desktop */}
                          <span className="hidden sm:block text-gray-500 text-sm flex-shrink-0">
                            {activity.time}
                          </span>
                        </div>
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
