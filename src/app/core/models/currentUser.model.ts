export interface CurrentUser {
  "given_name": string,
  "family_name": string,
  "nickname": string,
  "name": string,
  "picture": string,
  "locale": string,
  "updated_at": string,
  "email": string,
  "email_verified": boolean,
  "sub": string,
  "personal_details": PersonalDetails
}

export interface PersonalDetails {
  "residential_address"?: string,
  "work_office_location"?: Array<string>
}
