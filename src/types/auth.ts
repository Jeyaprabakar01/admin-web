export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface Organization {
  id: string;
  name: string;
  slug: string;
  domain?: string;
  industry?: string;
  size?: string;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  organizationId: string;
  createdAt: string;
}

export interface OnboardingData {
  organization: {
    name: string;
    slug: string;
    domain?: string;
    industry?: string;
    size?: string;
  };
  admin: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
}
