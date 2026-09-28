import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
} from 'recharts';

const ACCENT = '#2c4a52';
const INK = '#111111';
const MUTED = '#8a8a8a';
const GRID = '#e6e4dd';

const tooltipStyles = {
  backgroundColor: '#ffffff',
  border: '1px solid #e6e4dd',
  borderRadius: 6,
  padding: '8px 10px',
  fontSize: 12,
  color: INK,
  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
};

const axisStyles = {
  fontSize: 11,
  fill: MUTED,
  tickLine: false,
  axisLine: { stroke: GRID },
};

// ----- Industry size: area chart (line/area) -----
export function IndustrySizeChart({ data }) {
  return (
    <div className="w-full h-72 md:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 12, right: 8, left: 0, bottom: 4 }}>
          <defs>
            <linearGradient id="gradIndustry" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={ACCENT} stopOpacity={0.22} />
              <stop offset="100%" stopColor={ACCENT} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={GRID} vertical={false} strokeDasharray="2 4" />
          <XAxis dataKey="year" {...axisStyles} />
          <YAxis {...axisStyles} width={42} tickFormatter={(v) => `${v}`} />
          <Tooltip
            contentStyle={tooltipStyles}
            cursor={{ stroke: ACCENT, strokeWidth: 1, strokeDasharray: '3 3' }}
            formatter={(v) => [`${v} 亿元`, '规模']}
            labelStyle={{ color: MUTED, fontSize: 11, marginBottom: 4 }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke={ACCENT}
            strokeWidth={2}
            fill="url(#gradIndustry)"
            dot={{ r: 3, stroke: ACCENT, strokeWidth: 2, fill: '#fff' }}
            activeDot={{ r: 5, stroke: ACCENT, strokeWidth: 2, fill: '#fff' }}
            isAnimationActive
            animationDuration={900}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

// ----- Regional: horizontal bar (city stores per 10,000 people) -----
export function RegionalChart({ data }) {
  // sort desc for visual hierarchy
  const sorted = [...data].sort((a, b) => b.stores - a.stores);
  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sorted}
          layout="vertical"
          margin={{ top: 4, right: 24, left: 0, bottom: 4 }}
          barCategoryGap={6}
        >
          <CartesianGrid stroke={GRID} horizontal={false} strokeDasharray="2 4" />
          <XAxis type="number" {...axisStyles} tickFormatter={(v) => v.toFixed(1)} />
          <YAxis dataKey="city" type="category" {...axisStyles} width={70} />
          <Tooltip
            contentStyle={tooltipStyles}
            cursor={{ fill: '#f4f3ee' }}
            formatter={(v) => [v.toFixed(2), '家 / 万人']}
          />
          <Bar dataKey="stores" fill={INK} radius={[0, 2, 2, 0]} animationDuration={700} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ----- Consumer: donut for gender + bar for age -----
export function GenderDonut({ data }) {
  const colors = [ACCENT, '#cfd9cc'];
  return (
    <div className="w-full h-56">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip
            contentStyle={tooltipStyles}
            formatter={(v, n) => [`${v}%`, n]}
          />
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius="58%"
            outerRadius="88%"
            paddingAngle={2}
            stroke="#fff"
            strokeWidth={2}
            isAnimationActive
            animationDuration={700}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={colors[i % colors.length]} />
            ))}
          </Pie>
          <Legend
            verticalAlign="middle"
            align="right"
            layout="vertical"
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 12, color: INK }}
            formatter={(v) => <span style={{ color: INK }}>{v}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function AgeBar({ data }) {
  return (
    <div className="w-full h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 4 }}>
          <CartesianGrid stroke={GRID} vertical={false} strokeDasharray="2 4" />
          <XAxis dataKey="age" {...axisStyles} />
          <YAxis {...axisStyles} tickFormatter={(v) => `${v}%`} width={32} />
          <Tooltip
            contentStyle={tooltipStyles}
            cursor={{ fill: '#f4f3ee' }}
            formatter={(v) => [`${v}%`, '占比']}
          />
          <Bar dataKey="share" fill={INK} radius={[2, 2, 0, 0]} animationDuration={700} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ----- Competition: market share donut + Starbucks vs Luckin bars -----
const PIE_COLORS = [
  ACCENT, '#4a6e76', '#7c979c', '#a5b5b8', '#cfd9cc',
  '#b8a07c', '#9b8aa0', '#8fa9a3', '#c3b299', '#d6cab1', '#e6dfcf',
];

export function MarketShareDonut({ data }) {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip contentStyle={tooltipStyles} formatter={(v, k) => [`${v}%`, k]} />
          <Pie
            data={data}
            dataKey="share"
            nameKey="brand"
            innerRadius="48%"
            outerRadius="82%"
            paddingAngle={1}
            stroke="#fff"
            strokeWidth={2}
            isAnimationActive
            animationDuration={700}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
            ))}
          </Pie>
          <Legend
            verticalAlign="middle"
            align="right"
            layout="vertical"
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 12, color: INK }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CityTierBar({ data }) {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 4 }}>
          <CartesianGrid stroke={GRID} vertical={false} strokeDasharray="2 4" />
          <XAxis dataKey="tier" {...axisStyles} />
          <YAxis {...axisStyles} width={50} tickFormatter={(v) => v >= 1000 ? `${v / 1000}k` : v} />
          <Tooltip
            contentStyle={tooltipStyles}
            cursor={{ fill: '#f4f3ee' }}
            formatter={(v, k) => [v.toLocaleString(), k === 'starbucks' ? 'Starbucks' : 'Luckin']}
          />
          <Legend
            iconType="rect"
            iconSize={10}
            wrapperStyle={{ fontSize: 12, color: INK, paddingTop: 4 }}
            formatter={(v) => <span style={{ color: INK }}>{v === 'starbucks' ? 'Starbucks' : 'Luckin'}</span>}
          />
          <Bar dataKey="starbucks" fill={INK} radius={[2, 2, 0, 0]} animationDuration={700} />
          <Bar dataKey="luckin" fill={ACCENT} radius={[2, 2, 0, 0]} animationDuration={700} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ----- Per-capita consumption -----
export function PerCapitaBar({ data }) {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 4 }}>
          <CartesianGrid stroke={GRID} vertical={false} strokeDasharray="2 4" />
          <XAxis dataKey="country" {...axisStyles} />
          <YAxis {...axisStyles} width={36} tickFormatter={(v) => v} />
          <Tooltip
            contentStyle={tooltipStyles}
            cursor={{ fill: '#f4f3ee' }}
            formatter={(v) => [`${v} 杯 / 年`, '人均消费']}
          />
          <Bar dataKey="value" fill={INK} radius={[2, 2, 0, 0]} animationDuration={700} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}