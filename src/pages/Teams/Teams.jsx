const Teams = () => {
  const activitiesData = [
    {
      id: 1,
      date: "February 11, 2025",
      activities: [
        {
          id: 11,
          type: "member_added",
          message: "You have been added as member to CAT scan room by",
          user: "Leon Green",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuLZe9UHs6cC_sIBZ8HIqkTg4ADomTdWBcQ&s",
          time: "2 days ago",
        },
      ],
    },
    {
      id: 2,
      date: "February 5, 2025",
      activities: [
        {
          id: 21,
          type: "level_change",
          message: "changed your level in Project Cortana to Member",
          user: "Christine Schott",
          start: true,
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuLZe9UHs6cC_sIBZ8HIqkTg4ADomTdWBcQ&s",
          time: "last week",
        },
        {
          id: 22,
          type: "level_change",
          message: "changed your level in Project Cortana to Admin",
          user: "Christine Schott",
          start: true,
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuLZe9UHs6cC_sIBZ8HIqkTg4ADomTdWBcQ&s",
          time: "last week",
        },
        {
          id: 23,
          type: "invitation",
          message: "You have been invited to join Project Cortana by ",
          user: "Christine Schott",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuLZe9UHs6cC_sIBZ8HIqkTg4ADomTdWBcQ&s",
          time: "last week",
        },
      ],
    },
    {
      id: 3,
      date: "February 4, 2025",
      activities: [
        {
          id: 31,
          type: "member_added",
          message:
            "You have been added as member to Virtual annual conference internal by",
          user: "Christine Schott",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuLZe9UHs6cC_sIBZ8HIqkTg4ADomTdWBcQ&s",
          time: "last week",
        },
      ],
    },
    {
      id: 4,
      date: "June 27, 2024",
      activities: [
        {
          id: 41,
          type: "team_added",
          message:
            "added team Virtual Annual Conference as member to Virtual annual conference internal",
          user: "Christine Schott",
          start: true,
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuLZe9UHs6cC_sIBZ8HIqkTg4ADomTdWBcQ&s",
          time: "8 months ago",
        },
        {
          id: 42,
          type: "removal",
          message: "You have been removed from World Press Freedom Day by",
          user: "Internal Project Team",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuLZe9UHs6cC_sIBZ8HIqkTg4ADomTdWBcQ&s",
          time: "8 months ago",
        },
        {
          id: 43,
          type: "team_added",
          message:
            "added team Virtual Annual Conference as member to World Press Freedom Day",
          user: "Internal Project Team",
          start: true,
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuLZe9UHs6cC_sIBZ8HIqkTg4ADomTdWBcQ&s",
          time: "8 months ago",
        },
      ],
    },
    {
      id: 5,
      date: "April 10, 2024",
      activities: [
        {
          id: 51,
          type: "level_change",
          message:
            "changed Internal Project Team (2)'s level in World Press Freedom Day to Admin",
          user: "Analise Lavois",
          start: true,
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuLZe9UHs6cC_sIBZ8HIqkTg4ADomTdWBcQ&s",
          time: "10 months ago",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Page Header */}
        <div className="bg-white border-b border-gray-200 px-3 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900 truncate">
              Teams
            </h1>
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="flex-1 bg-white px-3 sm:px-6 py-4 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {activitiesData.map((dayGroup) => (
              <div key={dayGroup.id} className="mb-8">
                {/* Date Header */}
                <div className="flex items-center mb-4">
                  <h2 className="text-3xl font-medium text-gray-900">
                    {dayGroup.date}
                  </h2>
                  <div className="flex-1 ml-4 border-t border-gray-200"></div>
                </div>

                {/* Activities for this date */}
                <div className="space-y-3">
                  {dayGroup.activities.map((activity) => (
                    <div
                      key={activity.id}
                      className={`flex items-start gap-3 p-4 rounded-lg transition-colors`}
                    >
                      {/* Activity Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="text-gray-900">
                              {activity.start && activity.user && (
                                <span className="inline-flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-full">
                                  <img
                                    src={activity.avatar}
                                    alt={activity.user}
                                    className="w-4 h-4 rounded-full"
                                  />
                                  <span className="font-medium">
                                    {activity.user}
                                  </span>
                                </span>
                              )}
                              {activity.message}{" "}
                              {!activity.start && activity.user && (
                                <span className="inline-flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-full">
                                  <img
                                    src={activity.avatar}
                                    alt={activity.user}
                                    className="w-4 h-4 rounded-full"
                                  />
                                  <span className="font-medium">
                                    {activity.user}
                                  </span>
                                </span>
                              )}
                            </p>
                          </div>
                          <span className="text-gray-500 ml-2 shrink-0">
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
