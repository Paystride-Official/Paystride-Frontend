export type HeaderStatProps = {
  name: string;
  amount?: string;
  description?: string;
  percent?: number;
  count?: number;
  img?: any;
};

export type OptionSelectProps = {
  key: string;
  text: string;
};

export type TabProps = {
  id: string;
  title: string;
};

export type ChartOption = {
  title?: {
    text: string;
    subtext: string;
  };
  tooltip?: {
    trigger: string;
    overflowX?: string;
    axisPointer?: {
      type: string;
    };
  };
  legend?: {
    data: string[];
  };
  toolbox?: {
    show: boolean;
    feature: {
      dataView: {
        show: boolean;
        readOnly: boolean;
      };
      magicType: {
        show: boolean;
        type: string[];
      };
      restore: {
        show: boolean;
      };
      saveAsImage: {
        show: boolean;
      };
    };
  };
  calculable?: boolean;
  xAxis: {
    type: string;
    data: string[];
    axisTick?: {
      alignWithLabel?: Boolean;
    };
  }[];

  yAxis: {
    type?: string;
    value?: Boolean;
  }[];
  series: {
    itemStyle?: {};
    name: string;
    type: string;
    data: number[];
    barWidth?: string;
  }[];
  [key: string]: any;
};

export type PieChartOption = {
  tooltip: {
    trigger: string;
  };
  legend?: {
    top: string;
    right: string;
    orient: string;
    itemWidth: number;
  };
  series: {
    right: string;
    name: string;
    type: string;
    radius: [string, string];
    avoidLabelOverlap: boolean;
    label: {
      show: boolean;
      position: string;
    };
    emphasis: {
      label: {
        show: boolean;
        fontSize: number;
        fontWeight: string;
      };
    };
    labelLine: {
      show: boolean;
    };
    data: {
      value: number;
      name: string;
    }[];
  }[];
};

export type column = Record<string, any>;

export type row = Record<string, any>;

export type NewUser = Record<string, any>;

// NewUser {
//   business_name: string;
//   email: string;
//   name: string;
//   password: string;
//   phone_number: string;
//   t_and_c: boolean;
//   aboutUs?: string;
// }

export interface signUpUser {
  business_name?: string;
  email: string;
  name?: string;
  password: string;
  phone_number: string;
  t_and_c?: boolean;
  aboutUs?: string;
}

export interface FilterObject {
  [key: string]: any;
}
