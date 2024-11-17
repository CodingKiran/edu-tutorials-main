export interface Course {
  id: string;
  title: string;
  image: string;
  instructor: string;
  section: string;
  semester: string;
  description: string;
  price: number;
}

export const Course = [
  {
    id: "101-AF",
    title: "Accounting Standards & Reporting",
    price: 200,
    instructor: "Tarak Anand",
    semester: "I",
    section: "A&F, FM, Regular",
    description:
      "A comprehensive study of accounting standards and their application in financial reporting.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Accounting Standards",
      "Chapter 2: Accounting Standard 1: Disclosure of Accounting Policies",
    ],
    objectives: [
      "To understand the theoretical framework of accounting standards.",
      "To apply accounting standards to practical situations.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "102-AF",
    title: "Organizational Behavior",
    price: 200,
    instructor: "Tarak Anand",
    semester: "I",
    section: "A&F",
    description:
      "A study of individual behavior, group dynamics, and organizational processes.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Organizational Behavior",
      "Chapter 2: Individual Behavior",
    ],
    objectives: [
      "To understand the concepts and theories of organizational behavior.",
      "To analyze individual and group behavior in organizations.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "103-AF",
    title: "Business Environment and Policy",
    price: 200,
    instructor: "Tarak Anand",
    semester: "I",
    section: "A&F",
    description:
      "An analysis of the economic, political, legal, and social factors affecting business.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: The Indian Economy",
      "Chapter 2: Government Policies and Business",
    ],
    objectives: [
      "To understand the Indian economic environment.",
      "To analyze the impact of government policies on business.",
    ],
    duration: "3 hours per week",
  },

  {
    id: "104-Af",
    title: "Managerial Economics",
    price: 200,
    instructor: "Tarak Anand",
    semester: "I",
    section: "A&F",
    description:
      "An analysis of economic theories and tools applicable to managerial decision-making.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Managerial Economics",
      "Chapter 2: Demand Analysis",
      "Chapter 3: Production Analysis",
      "Chapter 4: Cost Analysis",
      "Chapter 5: Market Structures",
      "Chapter 6: Pricing Strategies",
    ],
    objectives: [
      "To understand the economic concepts relevant to business decision-making.",
      "To apply economic tools to analyze business problems.",
      "To develop skills in strategic decision-making.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "105-AF",
    title: "Corporate Governance",
    price: 200,
    instructor: "Tarak Anand",
    semester: "I",
    section: "A&F",
    description:
      "A study of the mechanisms, processes, and relationships involved in corporate governance.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Corporate Governance",
      "Chapter 2: Corporate Governance Mechanisms",
      "Chapter 3: Board of Directors",
      "Chapter 4: Shareholders and Shareholder Rights",
      "Chapter 5: Corporate Social Responsibility",
    ],
    objectives: [
      "To understand the principles of corporate governance.",
      "To analyze the role of various stakeholders in corporate governance.",
      "To evaluate the effectiveness of corporate governance practices.",
    ],
    duration: "3 hours per week",
  },

  {
    id: "201-AF",
    title: "Advanced Cost Accounting",
    price: 200,
    instructor: "Tarak Anand",
    semester: "II",
    section: "A&F",
    description:
      "A comprehensive study of advanced cost accounting techniques and their applications.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Advanced Cost Accounting Concepts",
      "Chapter 2: Standard Costing and Variance Analysis",
      "Chapter 3: Marginal Costing and Decision Making",
      "Chapter 4: Activity-Based Costing",
    ],
    objectives: [
      "To understand the advanced concepts of cost accounting.",
      "To apply advanced cost accounting techniques to solve real-world problems.",
      "To develop skills in cost analysis and control.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "202-AF",
    title: "Financial Management",
    price: 200,
    instructor: "Tarak Anand",
    semester: "II",
    section: "A&F",
    description:
      "A study of the principles and techniques of financial management.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Financial Management",
      "Chapter 2: Time Value of Money",
      "Chapter 3: Capital Budgeting",
      "Chapter 4: Working Capital Management",
      "Chapter 5: Financial Markets and Institutions",
    ],
    objectives: [
      "To understand the financial goals of a firm.",
      "To apply financial tools to make sound investment and financing decisions.",
      "To develop skills in financial analysis and planning.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "203-AF",
    title: "Marketing Management",
    price: 200,
    instructor: "Tarak Anand",
    semester: "II",
    section: "A&F",
    description:
      "A study of the principles and practices of marketing management.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Marketing Management",
      "Chapter 2: Marketing Environment",
      "Chapter 3: Consumer Behavior",
      "Chapter 4: Product Management",
      "Chapter 5: Pricing Strategies",
      "Chapter 6: Promotion and Advertising",
      "Chapter 7: Distribution Channels",
    ],
    objectives: [
      "To understand the marketing concepts and strategies.",
      "To apply marketing tools to develop effective marketing plans.",
      "To develop skills in market research and analysis.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "204-AF",
    title: "Accounting Practices in Banks",
    price: 200,
    instructor: "Tarak Anand",
    semester: "II",
    section: "A&F",
    description:
      "A study of the accounting principles and practices specific to banks.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Banking Operations",
      "Chapter 2: Accounting Standards for Banks",
      "Chapter 3: Financial Reporting for Banks",
      "Chapter 4: Risk Management and Provisioning",
    ],
    objectives: [
      "To understand the unique accounting requirements of banks.",
      "To analyze the financial statements of banks.",
      "To evaluate the financial performance and risk profile of banks.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "205-AF",
    title: "Quantitative Techniques for Business Decisions",
    price: 200,
    instructor: "Tarak Anand",
    semester: "II",
    section: "A&F",
    description:
      "A study of quantitative techniques used in business decision-making.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Quantitative Techniques",
      "Chapter 2: Probability Theory",
      "Chapter 3: Statistical Inference",
      "Chapter 4: Operations Research Techniques",
    ],
    objectives: [
      "To understand the quantitative methods used in business.",
      "To apply quantitative techniques to solve business problems.",
      "To develop skills in data analysis and modeling.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "301-AF",
    title: "Financial Derivatives",
    price: 200,
    instructor: "Tarak Anand",
    semester: "III",
    section: "A&F",
    description: "A study of the theory and practice of financial derivatives.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Financial Derivatives",
      "Chapter 2: Forward Contracts and Futures",
      "Chapter 3: Options",
      "Chapter 4: Swaps",
      "Chapter 5: Risk Management with Derivatives",
    ],
    objectives: [
      "To understand the concepts of financial derivatives.",
      "To analyze the factors affecting the pricing of derivatives.",
      "To apply derivatives to manage risk.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "302-AF",
    title: "Financial Markets and Services",
    price: 200,
    instructor: "Tarak Anand",
    semester: "III",
    section: "A&F",
    description:
      "A study of the structure, operations, and regulation of financial markets and services.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Financial Markets",
      "Chapter 2: Money Market",
      "Chapter 3: Capital Market",
      "Chapter 4: Financial Institutions",
      "Chapter 5: Financial Services",
    ],
    objectives: [
      "To understand the functioning of financial markets.",
      "To analyze the role of financial institutions in the economy.",
      "To evaluate the impact of financial services on businesses and individuals.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "303-AF",
    title: "Tally with GST Applications",
    price: 200,
    instructor: "Tarak Anand",
    semester: "III",
    section: "A&F",
    description:
      "A practical course on using Tally software for accounting and GST compliance.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Tally",
      "Chapter 2: Master Data Entry",
      "Chapter 3: Accounting Transactions",
      "Chapter 4: Inventory Management",
      "Chapter 5: GST Returns and Compliance",
    ],
    objectives: [
      "To learn the basics of Tally software.",
      "To use Tally to record and analyze financial transactions.",
      "To comply with GST regulations using Tally.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "304-AF",
    title: "Internal Audit and Standard Audit Practices",
    price: 200,
    instructor: "Tarak Anand",
    semester: "III",
    section: "A&F",
    description:
      "A study of the concepts and techniques of internal audit and standard audit practices.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Internal Audit",
      "Chapter 2: Internal Control Systems",
      "Chapter 3: Audit Planning and Risk Assessment",
      "Chapter 4: Audit Procedures and Techniques",
      "Chapter 5: Audit Reporting and Follow-up",
    ],
    objectives: [
      "To understand the role of internal audit in organizations.",
      "To apply audit techniques to assess internal controls.",
      "To prepare audit reports and recommendations.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "401-AF",
    title: "Strategic Financial Management",
    price: 200,
    instructor: "Tarak Anand",
    semester: "IV",
    section: "A&F",
    description: "A study of the strategic financial decisions of firms.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Strategic Financial Planning",
      "Chapter 2: Mergers and Acquisitions",
      "Chapter 3: Corporate Restructuring",
      "Chapter 4: International Financial Management",
    ],
    objectives: [
      "To understand the strategic financial issues facing firms.",
      "To analyze the impact of strategic decisions on financial performance.",
      "To develop skills in strategic financial planning and decision-making.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "402-AF",
    title: "Investment Management",
    price: 200,
    instructor: "Tarak Anand",
    semester: "IV",
    section: "A&F",
    description:
      "A study of the principles and techniques of investment management.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Investment Management",
      "Chapter 2: Investment Objectives and Constraints",
      "Chapter 3: Portfolio Theory and Asset Allocation",
      "Chapter 4: Security Analysis",
      "Chapter 5: Portfolio Performance Evaluation",
    ],
    objectives: [
      "To understand the investment process.",
      "To analyze investment opportunities and risks.",
      "To construct and manage investment portfolios.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "403-AF",
    title: "GST and Customs Duty",
    price: 200,
    instructor: "Tarak Anand",
    semester: "IV",
    section: "A&F",
    description:
      "A comprehensive study of GST and customs duty laws and regulations.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to GST",
      "Chapter 2: GST Laws and Procedures",
      "Chapter 3: GST Returns and Compliance",
      "Chapter 4: Customs Duty Laws and Regulations",
      "Chapter 5: Customs Clearance Procedures",
    ],
    objectives: [
      "To understand the GST and customs duty laws.",
      "To comply with GST and customs duty regulations.",
      "To manage GST and customs duty related risks.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "405-AF",
    title: "Security Market Operations",
    price: 200,
    instructor: "Tarak Anand",
    semester: "IV",
    section: "A&F",
    description: "A study of the operations of security markets.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Security Markets",
      "Chapter 2: Primary Market Operations",
      "Chapter 3: Secondary Market Operations",
      "Chapter 4: Securities Market Regulations",
      "Chapter 5: Depository Services",
    ],
    objectives: [
      "To understand the functioning of security markets.",
      "To analyze the role of intermediaries in security markets.",
      "To evaluate the impact of regulations on security markets.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "101-R",
    title: "Accounting Standards & Reporting",
    price: 200,
    instructor: "Tarak Anand",
    semester: "I",
    section: "Regular",
    description:
      "A comprehensive study of accounting standards and their application in financial reporting.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Accounting Standards",
      "Chapter 2: Accounting Standard 1: Disclosure of Accounting Policies",
    ],
    objectives: [
      "To understand the theoretical framework of accounting standards.",
      "To apply accounting standards to practical situations.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "102-R",
    title: "Organizational Behavior",
    price: 200,
    instructor: "Tarak Anand",
    semester: "I",
    section: "Regular",
    description:
      "A study of individual behavior, group dynamics, and organizational processes.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Organizational Behavior",
      "Chapter 2: Individual Behavior",
    ],
    objectives: [
      "To understand the concepts and theories of organizational behavior.",
      "To analyze individual and group behavior in organizations.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "103-R",
    title: "Business Environment and Policy",
    price: 200,
    instructor: "Tarak Anand",
    semester: "I",
    section: "Regular",
    description:
      "An analysis of the economic, political, legal, and social factors affecting business.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: The Indian Economy",
      "Chapter 2: Government Policies and Business",
    ],
    objectives: [
      "To understand the Indian economic environment.",
      "To analyze the impact of government policies on business.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "104-R",
    title: "Managerial Economics",
    price: 200,
    instructor: "Tarak Anand",
    semester: "I",
    section: "Regular",
    description:
      "An analysis of economic theories and tools applicable to managerial decision-making.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Managerial Economics",
      "Chapter 2: Demand Analysis",
      "Chapter 3: Production Analysis",
      "Chapter 4: Cost Analysis",
      "Chapter 5: Market Structures",
      "Chapter 6: Pricing Strategies",
    ],
    objectives: [
      "To understand the economic concepts relevant to business decision-making.",
      "To apply economic tools to analyze business problems.",
      "To develop skills in strategic decision-making.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "105-R",
    title: "Quantitative Techniques for Business Decisions",
    price: 200,
    instructor: "Tarak Anand",
    semester: "I",
    section: "Regular",
    description:
      "A study of quantitative techniques used in business decision-making.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Quantitative Techniques",
      "Chapter 2: Probability Theory",
      "Chapter 3: Statistical Inference",
      "Chapter 4: Operations Research Techniques",
    ],
    objectives: [
      "To understand the quantitative methods used in business.",
      "To apply quantitative techniques to solve business problems.",
      "To develop skills in data analysis and modeling.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "201-R",
    title: "Human Resource Management",
    price: 200,
    instructor: "Tarak Anand",
    semester: "II",
    section: "Regular",
    description:
      "A study of the principles and practices of human resource management.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Human Resource Management",
      "Chapter 2: Human Resource Planning",
      "Chapter 3: Recruitment and Selection",
      "Chapter 4: Performance Management",
      "Chapter 5: Compensation and Benefits",
    ],
    objectives: [
      "To understand the role of human resources in organizations.",
      "To apply HR principles to manage employees effectively.",
      "To develop skills in HR planning, recruitment, performance management, and compensation.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "202-R",
    title: "Financial Management",
    price: 200,
    instructor: "Tarak Anand",
    semester: "II",
    section: "Regular",
    description:
      "A study of the principles and techniques of financial management.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Financial Management",
      "Chapter 2: Time Value of Money",
      "Chapter 3: Capital Budgeting",
      "Chapter 4: Working Capital Management",
      "Chapter 5: Financial Markets and Institutions",
    ],
    objectives: [
      "To understand the financial goals of a firm.",
      "To apply financial tools to make sound investment and financing decisions.",
      "To develop skills in financial analysis and planning.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "203-R",
    title: "Marketing Management",
    price: 200,
    instructor: "Tarak Anand",
    semester: "II",
    section: "Regular",
    description:
      "A study of the principles and practices of marketing management.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Marketing Management",
      "Chapter 2: Marketing Environment",
      "Chapter 3: Consumer Behavior",
      "Chapter 4: Product Management",
      "Chapter 5: Pricing Strategies",
      "Chapter 6: Promotion and Advertising",
      "Chapter 7: Distribution Channels",
    ],
    objectives: [
      "To understand the marketing concepts and strategies.",
      "To apply marketing tools to develop effective marketing plans.",
      "To develop skills in market research and analysis.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "204-R",
    title: "Advanced Cost Accounting",
    price: 200,
    instructor: "Tarak Anand",
    semester: "II",
    section: "Regular",
    description:
      "A comprehensive study of advanced cost accounting techniques and their applications.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Advanced Cost Accounting Concepts",
      "Chapter 2: Standard Costing and Variance Analysis",
      "Chapter 3: Marginal Costing and Decision Making",
      "Chapter 4: Activity-Based Costing",
    ],
    objectives: [
      "To understand the advanced concepts of cost accounting.",
      "To apply advanced cost accounting techniques to solve real-world problems.",
      "To develop skills in cost analysis and control.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "205-R",
    title: "Corporate Governance",
    price: 200,
    instructor: "Tarak Anand",
    semester: "II",
    section: "Regular",
    description:
      "A study of the mechanisms, processes, and relationships involved in corporate governance.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Corporate Governance",
      "Chapter 2: Corporate Governance Mechanisms",
      "Chapter 3: Board of Directors",
      "Chapter 4: Shareholders and Shareholder Rights",
      "Chapter 5: Corporate Social Responsibility",
    ],
    objectives: [
      "To understand the principles of corporate governance.",
      "To analyze the role of various stakeholders in corporate governance.",
      "To evaluate the effectiveness of corporate governance practices.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "301-R",
    title: "Financial Markets and Services",
    price: 200,
    instructor: "Tarak Anand",
    semester: "III",
    section: "Regular",
    description:
      "A study of the structure, operations, and regulation of financial markets and services.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Financial Markets",
      "Chapter 2: Money Market",
      "Chapter 3: Capital Market",
      "Chapter 4: Financial Institutions",
      "Chapter 5: Financial Services",
    ],
    objectives: [
      "To understand the functioning of financial markets.",
      "To analyze the role of financial institutions in the economy.",
      "To evaluate the impact of financial services on businesses and individuals.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "302-R",
    title: "Accounting for Managerial Decisions",
    price: 200,
    instructor: "Tarak Anand",
    semester: "III",
    section: "Regular",
    description:
      "A study of accounting information and its use in managerial decision-making.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Managerial Accounting",
      "Chapter 2: Cost Accounting Concepts",
      "Chapter 3: Cost-Volume-Profit Analysis",
      "Chapter 4: Budgeting and Forecasting",
      "Chapter 5: Decision Making",
    ],
    objectives: [
      "To understand the role of accounting information in decision-making.",
      "To apply cost accounting techniques to analyze costs and revenues.",
      "To develop skills in budgeting, forecasting, and decision-making.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "303-R",
    title: "Security Analysis and Portfolio Management",
    price: 200,
    instructor: "Tarak Anand",
    semester: "III",
    section: "Regular",
    description:
      "A study of the techniques used to analyze securities and construct investment portfolios.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Security Analysis",
      "Chapter 2: Fundamental Analysis",
      "Chapter 3: Technical Analysis",
      "Chapter 4: Portfolio Theory and Asset Allocation",
      "Chapter 5: Portfolio Performance Evaluation",
    ],
    objectives: [
      "To understand the principles of security analysis.",
      "To evaluate the investment potential of securities.",
      "To construct and manage investment portfolios.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "304-R",
    title: "Internal Audit and Standard Audit Practices",
    price: 200,
    instructor: "Tarak Anand",
    semester: "III",
    section: "Regular",
    description:
      "A study of the concepts and techniques of internal audit and standard audit practices.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Internal Audit",
      "Chapter 2: Internal Control Systems",
      "Chapter 3: Audit Planning and Risk Assessment",
      "Chapter 4: Audit Procedures and Techniques",
      "Chapter 5: Audit Reporting and Follow-up",
    ],
    objectives: [
      "To understand the role of internal audit in organizations.",
      "To apply audit techniques to assess internal controls.",
      "To prepare audit reports and recommendations.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "401-R",
    title: "International Financial Management",
    price: 200,
    instructor: "Tarak Anand",
    semester: "IV",
    section: "Regular",
    description:
      "A study of the financial management issues faced by multinational corporations.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to International Finance",
      "Chapter 2: International Financial Markets",
      "Chapter 3: Foreign Exchange Risk Management",
      "Chapter 4: International Capital Budgeting",
      "Chapter 5: International Working Capital Management",
    ],
    objectives: [
      "To understand the challenges of managing finances in a global environment.",
      "To analyze the impact of exchange rate fluctuations on business.",
      "To evaluate international investment and financing decisions.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "402-R",
    title: "Tax Planning & Management",
    price: 200,
    instructor: "Tarak Anand",
    semester: "IV",
    section: "Regular",
    description:
      "A study of tax laws, regulations, and techniques for effective tax planning and management.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Taxation",
      "Chapter 2: Income Tax Laws",
      "Chapter 3: Tax Planning Techniques",
      "Chapter 4: Indirect Taxes",
      "Chapter 5: International Taxation",
    ],
    objectives: [
      "To understand the Indian tax system.",
      "To apply tax laws to business transactions.",
      "To develop tax planning strategies to minimize tax liabilities.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "403-R",
    title: "E-Commerce",
    price: 200,
    instructor: "Tarak Anand",
    semester: "IV",
    section: "Regular",
    description:
      "A study of electronic commerce and its applications in business.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to E-commerce",
      "Chapter 2: E-commerce Models",
      "Chapter 3: E-commerce Technologies",
      "Chapter 4: Digital Marketing",
      "Chapter 5: Security and Privacy in E-commerce",
    ],
    objectives: [
      "To understand the concepts of e-commerce.",
      "To analyze the opportunities and challenges of e-commerce.",
      "To develop skills in e-commerce strategy and implementation.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "404-R",
    title: "Strategic Management",
    price: 200,
    instructor: "Tarak Anand",
    semester: "IV",
    section: "Regular",
    description:
      "A study of the strategic planning and management of organizations.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Strategic Management",
      "Chapter 2: Strategic Planning Process",
      "Chapter 3: Environmental Analysis",
      "Chapter 4: Strategy Formulation",
      "Chapter 5: Strategy Implementation and Control",
    ],
    objectives: [
      "To understand the strategic management process.",
      "To analyze the external and internal environment of organizations.",
      "To develop strategic plans and implement them effectively.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "405-R",
    title: "Security Market Operations",
    price: 200,
    instructor: "Tarak Anand",
    semester: "IV",
    section: "Regular",
    description: "A study of the operations of security markets.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Security Markets",
      "Chapter 2: Primary Market Operations",
      "Chapter 3: Secondary Market Operations",
      "Chapter 4: Securities Market Regulations",
      "Chapter 5: Depository Services",
    ],
    objectives: [
      "To understand the functioning of security markets.",
      "To analyze the role of intermediaries in security markets.",
      "To evaluate the impact of regulations on security markets.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "101-FM",
    title: "Accounting Standards & Reporting",
    price: 200,
    instructor: "Tarak Anand",
    semester: "I",
    section: "FM",
    description:
      "A comprehensive study of accounting standards and their application in financial reporting.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Accounting Standards",
      "Chapter 2: Accounting Standard 1: Disclosure of Accounting Policies",
    ],
    objectives: [
      "To understand the theoretical framework of accounting standards.",
      "To apply accounting standards to practical situations.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "102-FM",
    title: "Financial Management",
    price: 200,
    instructor: "Tarak Anand",
    semester: "I",
    section: "FM",
    description:
      "A study of the principles and techniques of financial management.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Financial Management",
      "Chapter 2: Time Value of Money",
      "Chapter 3: Capital Budgeting",
      "Chapter 4: Working Capital Management",
      "Chapter 5: Financial Markets and Institutions",
    ],
    objectives: [
      "To understand the financial goals of a firm.",
      "To apply financial tools to make sound investment and financing decisions.",
      "To develop skills in financial analysis and planning.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "103-FM",
    title: "Business Environment and Policy",
    price: 200,
    instructor: "Tarak Anand",
    semester: "I",
    section: "FM",
    description:
      "An analysis of the economic, political, legal, and social factors affecting business.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: The Indian Economy",
      "Chapter 2: Government Policies and Business",
    ],
    objectives: [
      "To understand the Indian economic environment.",
      "To analyze the impact of government policies on business.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "104-FM",
    title: "Organizational Behavior",
    price: 200,
    instructor: "Tarak Anand",
    semester: "I",
    section: "FM",
    description:
      "A study of individual behavior, group dynamics, and organizational processes.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Organizational Behavior",
      "Chapter 2: Individual Behavior",
    ],
    objectives: [
      "To understand the concepts and theories of organizational behavior.",
      "To analyze individual and group behavior in organizations.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "105-FM",
    title: "Quantitative Techniques for Business Decisions",
    price: 200,
    instructor: "Tarak Anand",
    semester: "I",
    section: "FM",
    description:
      "A study of quantitative techniques used in business decision-making.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Quantitative Techniques",
      "Chapter 2: Probability Theory",
      "Chapter 3: Statistical Inference",
      "Chapter 4: Operations Research Techniques",
    ],
    objectives: [
      "To understand the quantitative methods used in business.",
      "To apply quantitative techniques to solve business problems.",
      "To develop skills in data analysis and modeling.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "201-FM",
    title: "Advanced Cost Accounting",
    price: 200,
    instructor: "Tarak Anand",
    semester: "II",
    section: "FM",
    description:
      "A comprehensive study of advanced cost accounting techniques and their applications.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Advanced Cost Accounting Concepts",
      "Chapter 2: Standard Costing and Variance Analysis",
      "Chapter 3: Marginal Costing and Decision Making",
      "Chapter 4: Activity-Based Costing",
    ],
    objectives: [
      "To understand the advanced concepts of cost accounting.",
      "To apply advanced cost accounting techniques to solve real-world problems.",
      "To develop skills in cost analysis and control.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "202-FM",
    title: "Financial Markets and Services",
    price: 200,
    instructor: "Tarak Anand",
    semester: "II",
    section: "FM",
    description:
      "A study of the structure, operations, and regulation of financial markets and services.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Financial Markets",
      "Chapter 2: Money Market",
      "Chapter 3: Capital Market",
      "Chapter 4: Financial Institutions",
      "Chapter 5: Financial Services",
    ],
    objectives: [
      "To understand the functioning of financial markets.",
      "To analyze the role of financial institutions in the economy.",
      "To evaluate the impact of financial services on businesses and individuals.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "203-FM",
    title: "Strategic Financial Management",
    price: 200,
    instructor: "Tarak Anand",
    semester: "II",
    section: "FM",
    description: "A study of the strategic financial decisions of firms.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Strategic Financial Planning",
      "Chapter 2: Mergers and Acquisitions",
      "Chapter 3: Corporate Restructuring",
      "Chapter 4: International Financial Management",
    ],
    objectives: [
      "To understand the strategic financial issues facing firms.",
      "To analyze the impact of strategic decisions on financial performance.",
      "To develop skills in strategic financial planning and decision-making.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "204-FM",
    title: "Corporate Governance",
    price: 200,
    instructor: "Tarak Anand",
    semester: "II",
    section: "FM",
    description:
      "A study of the mechanisms, processes, and relationships involved in corporate governance.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Corporate Governance",
      "Chapter 2: Corporate Governance Mechanisms",
      "Chapter 3: Board of Directors",
      "Chapter 4: Shareholders and Shareholder Rights",
      "Chapter 5: Corporate Social Responsibility",
    ],
    objectives: [
      "To understand the principles of corporate governance.",
      "To analyze the role of various stakeholders in corporate governance.",
      "To evaluate the effectiveness of corporate governance practices.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "205-FM",
    title: "Working Capital Management",
    price: 200,
    instructor: "Tarak Anand",
    semester: "II",
    section: "FM",
    description: "A study of the management of a firm's working capital.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Working Capital Management",
      "Chapter 2: Cash Management",
      "Chapter 3: Receivables Management",
      "Chapter 4: Inventory Management",
    ],
    objectives: [
      "To understand the components of working capital.",
      "To analyze the factors affecting working capital requirements.",
      "To develop strategies for efficient working capital management.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "301-FM",
    title: "Security Analysis and Portfolio Management",
    price: 200,
    instructor: "Tarak Anand",
    semester: "III",
    section: "FM",
    description:
      "A study of the techniques used to analyze securities and construct investment portfolios.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Security Analysis",
      "Chapter 2: Fundamental Analysis",
      "Chapter 3: Technical Analysis",
      "Chapter 4: Portfolio Theory and Asset Allocation",
      "Chapter 5: Portfolio Performance Evaluation",
    ],
    objectives: [
      "To understand the principles of security analysis.",
      "To evaluate the investment potential of securities.",
      "To construct and manage investment portfolios.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "302-FM",
    title: "Accounting for Managerial Decisions",
    price: 200,
    instructor: "Tarak Anand",
    semester: "III",
    section: "FM",
    description:
      "A study of accounting information and its use in managerial decision-making.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Managerial Accounting",
      "Chapter 2: Cost Accounting Concepts",
      "Chapter 3: Cost-Volume-Profit Analysis",
      "Chapter 4: Budgeting and Forecasting",
      "Chapter 5: Decision Making",
    ],
    objectives: [
      "To understand the role of accounting information in decision-making.",
      "To apply cost accounting techniques to analyze costs and revenues.",
      "To develop skills in budgeting, forecasting, and decision-making.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "303-FM",
    title: "Tally with GST Applications",
    price: 200,
    instructor: "Tarak Anand",
    semester: "III",
    section: "FM",
    description:
      "A practical course on using Tally software for accounting and GST compliance.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Tally",
      "Chapter 2: Master Data Entry",
      "Chapter 3: Accounting Transactions",
      "Chapter 4: Inventory Management",
      "Chapter 5: GST Returns and Compliance",
    ],
    objectives: [
      "To learn the basics of Tally software.",
      "To use Tally to record and analyze financial transactions.",
      "To comply with GST regulations using Tally.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "304-FM",
    title: "Internal Audit and Standard Audit Practices",
    price: 200,
    instructor: "Tarak Anand",
    semester: "III",
    section: "FM",
    description:
      "A study of the concepts and techniques of internal audit and standard audit practices.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Internal Audit",
      "Chapter 2: Internal Control Systems",
      "Chapter 3: Audit Planning and Risk Assessment",
      "Chapter 4: Audit Procedures and Techniques",
      "Chapter 5: Audit Reporting and Follow-up",
    ],
    objectives: [
      "To understand the role of internal audit in organizations.",
      "To apply audit techniques to assess internal controls.",
      "To prepare audit reports and recommendations.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "401-FM",
    title: "Financial Derivatives",
    price: 200,
    instructor: "Tarak Anand",
    semester: "IV",
    section: "FM",
    description: "A study of the theory and practice of financial derivatives.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Financial Derivatives",
      "Chapter 2: Forward Contracts and Futures",
      "Chapter 3: Options",
      "Chapter 4: Swaps",
      "Chapter 5: Risk Management with Derivatives",
    ],
    objectives: [
      "To understand the concepts of financial derivatives.",
      "To analyze the factors affecting the pricing of derivatives.",
      "To apply derivatives to manage risk.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "402-FM",
    title: "Project Planning & Control",
    price: 200,
    instructor: "Tarak Anand",
    semester: "IV",
    section: "FM",
    description:
      "A study of the principles and techniques of project planning and control.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Project Management",
      "Chapter 2: Project Initiation and Planning",
      "Chapter 3: Project Scheduling and Control",
      "Chapter 4: Project Risk Management",
    ],
    objectives: [
      "To understand the project management process.",
      "To plan, schedule, and control projects effectively.",
      "To manage project risks and uncertainties.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "403-FM",
    title: "GST and Customs Duty",
    price: 200,
    instructor: "Tarak Anand",
    semester: "IV",
    section: "FM",
    description:
      "A comprehensive study of GST and customs duty laws and regulations.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to GST",
      "Chapter 2: GST Laws and Procedures",
      "Chapter 3: GST Returns and Compliance",
      "Chapter 4: Customs Duty Laws and Regulations",
      "Chapter 5: Customs Clearance Procedures",
    ],
    objectives: [
      "To understand the GST and customs duty laws.",
      "To comply with GST and customs duty regulations.",
      "To manage GST and customs duty related risks.",
    ],
    duration: "3 hours per week",
  },
  {
    id: "405-FM",
    title: "Security Market Operations",
    price: 200,
    instructor: "Tarak Anand",
    semester: "IV",
    section: "FM",
    description: "A study of the operations of security markets.",
    image:
      "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    syllabus: [
      "Chapter 1: Introduction to Security Markets",
      "Chapter 2: Primary Market Operations",
      "Chapter 3: Secondary Market Operations",
      "Chapter 4: Securities Market Regulations",
      "Chapter 5: Depository Services",
    ],
    objectives: [
      "To understand the functioning of security markets.",
      "To analyze the role of intermediaries in security markets.",
      "To evaluate the impact of regulations on security markets.",
    ],
    duration: "3 hours per week",
  },
];
