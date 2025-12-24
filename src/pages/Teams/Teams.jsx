import React from "react";

const Teams = () => {
  const activitiesData = [
    {
      id: 1,
      date: "February 11, 2025",
      activities: [
        {
          id: 101,
          type: "member_added",
          message: "You have been added as member to",
          highlight: "CAT scan room",
          suffix: "by",
          user: "Leon Green",
          start: false,
          avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
          time: "2 days ago",
        },
      ],
    },
    {
      id: 2,
      date: "February 5, 2025",
      activities: [
        {
          id: 201,
          type: "level_change",
          message: "changed your level in",
          highlight: "Project Cortona",
          suffix: "to Member",
          user: "Christine Schott",
          start: true,
          avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
          time: "last week",
        },
        {
          id: 202,
          type: "level_change",
          message: "changed your level in",
          highlight: "Project Cortona",
          suffix: "to Admin",
          user: "Christine Schott",
          start: true,
          avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
          time: "last week",
        },
        {
          id: 203,
          type: "invitation",
          message: "You have been invited to join",
          highlight: "Project Cortona",
          suffix: "by",
          user: "Christine Schott",
          start: false,
          avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
          time: "last week",
        },
      ],
    },
    {
      id: 3,
      date: "February 4, 2025",
      activities: [
        {
          id: 301,
          type: "member_added",
          message: "You have been added as member to",
          highlight: "Virtual annual conference internal",
          suffix: "by",
          user: "Christine Schott",
          start: false,
          avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
          time: "last week",
        },
      ],
    },
    {
      id: 4,
      date: "June 27, 2024",
      activities: [
        {
          id: 401,
          type: "team_added",
          message: "added team Virtual Annual Conference as member to",
          highlight: "Virtual annual conference internal",
          user: "Christine Schott",
          start: true,
          avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
          time: "8 months ago",
        },
        {
          id: 402,
          type: "removal",
          message: "You have been removed from",
          highlight: "World Press Freedom Day",
          suffix: "by",
          user: "Internal Project Team",
          start: false,
          avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
          time: "8 months ago",
        },
        {
          id: 403,
          type: "team_added",
          message: "added team Virtual Annual Conference as member to",
          highlight: "World Press Freedom Day",
          user: "Internal Project Team",
          start: true,
          avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
          time: "8 months ago",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Page Header */}
        <div className="px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📋</span>
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
                            <span className="inline-flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-full mr-1 flex-shrink-0">
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
                            <span className="inline-flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-full ml-1 flex-shrink-0">
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
