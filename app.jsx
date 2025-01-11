import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertTriangle, CheckCircle, Users, Activity, BarChart2, Shield } from 'lucide-react';

const AlertaDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('problem');
  
  const stats = {
    activeAlerts: 12,
    resolvedIssues: 45,
    communityReports: 8,
    responseTime: '15 min',
    communityMembers: 250,
    riskZones: 5
  };

  return (
    <div className="w-full max-w-4xl space-y-4">
      {/* Header Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Alerta AI Environmental Monitoring System</CardTitle>
        </CardHeader>
      </Card>

      {/* Tab Navigation */}
      <div className="flex space-x-2">
        <button
          onClick={() => setSelectedTab('problem')}
          className={`px-4 py-2 rounded-lg ${
            selectedTab === 'problem' ? 'bg-blue-500 text-white' : 'bg-gray-100'
          }`}
        >
          The Problem
        </button>
        <button
          onClick={() => setSelectedTab('solution')}
          className={`px-4 py-2 rounded-lg ${
            selectedTab === 'solution' ? 'bg-blue-500 text-white' : 'bg-gray-100'
          }`}
        >
          Our Solution
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Panel */}
        <Card>
          <CardHeader>
            <CardTitle>
              {selectedTab === 'problem' ? 'Environmental Challenges' : 'Alerta AI Solution'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedTab === 'problem' ? (
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="text-red-500" />
                  <div>
                    <h4 className="font-bold">Illegal Dumping</h4>
                    <p>Uncontrolled waste disposal leading to health hazards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="text-red-500" />
                  <div>
                    <h4 className="font-bold">Slow Response Times</h4>
                    <p>Delayed action on environmental hazards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="text-red-500" />
                  <div>
                    <h4 className="font-bold">Limited Monitoring</h4>
                    <p>Lack of real-time environmental data</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Shield className="text-green-500" />
                  <div>
                    <h4 className="font-bold">AI-Powered Monitoring</h4>
                    <p>Predictive analysis of environmental risks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Activity className="text-green-500" />
                  <div>
                    <h4 className="font-bold">Real-time Reporting</h4>
                    <p>Mobile app for instant hazard reporting</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Users className="text-green-500" />
                  <div>
                    <h4 className="font-bold">Community Engagement</h4>
                    <p>Collaborative environmental protection</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Right Panel - Stats */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle />
                    <span className="text-xl font-bold">{stats.activeAlerts}</span>
                  </div>
                  <p className="text-sm">Active Alerts</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle />
                    <span className="text-xl font-bold">{stats.resolvedIssues}</span>
                  </div>
                  <p className="text-sm">Resolved Issues</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Users />
                    <span className="text-xl font-bold">{stats.communityMembers}</span>
                  </div>
                  <p className="text-sm">Active Users</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <BarChart2 />
                    <span className="text-xl font-bold">{stats.communityReports}</span>
                  </div>
                  <p className="text-sm">Reports Today</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Expected Outcomes</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span>30% reduction in illegal dumping</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span>60% faster response times</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span>Improved community awareness</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AlertaDashboard;