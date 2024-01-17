export type ErrorType = {
  statusCode: number
  message: string
}

export type ResourceErrorType = {
  error: ErrorType
}

export type ResourceType<T> = {
  success: boolean
  data: T
  error: ResourceErrorType
}

export type MethodType = "GET" | "POST" | "PUT" | "DELETE"

export type UserType = {
  id?: number
  first_name: string
  last_name: string
  password?: string
  email: string
  is_active?: boolean
  role_id?: number
}

export type UserModelType = {
  user: UserType
}

export type RestaurantType = {
  id?: number
  name: string
  address: string
  city: string
  phone: string
  email: string
  url?: string
  is_active?: boolean
}

export type RestaurantModelType = {
  restaurant: RestaurantType
}

export type CategoryType = {
  id?: number
  name: string
  description: string
  image?: string
  is_active: boolean
  restaurant_id: number
  sort_order?: number
}
export type CategoryModelType = {
  category: CategoryType
}
export type CategoriesType = {
  categories: CategoryType[]
}

export type SectionModelType = {
  id: number
  name: string
  description: string
  image: string
  is_active: boolean
}
export type SectionType = {
  section: SectionModelType
}
export type SectionsType = {
  sections: SectionModelType[]
}

export type ProductModelType = {
  id: number
  name: string
  description: string
  image: string
  price: number
  is_active: boolean
}
export type ProductType = {
  product: ProductModelType
}
export type ProductsType = {
  products: ProductModelType[]
}
