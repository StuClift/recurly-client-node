'use strict'

const exps = {
  Account: require('./resources/Account'),
  AccountAcquisition: require('./resources/AccountAcquisition'),
  AccountAcquisitionCost: require('./resources/AccountAcquisitionCost'),
  AccountBalance: require('./resources/AccountBalance'),
  AccountBalanceAmount: require('./resources/AccountBalanceAmount'),
  AccountMini: require('./resources/AccountMini'),
  AccountNote: require('./resources/AccountNote'),
  AddOn: require('./resources/AddOn'),
  AddOnMini: require('./resources/AddOnMini'),
  AddOnPricing: require('./resources/AddOnPricing'),
  Address: require('./resources/Address'),
  BillingInfo: require('./resources/BillingInfo'),
  BillingInfoUpdatedBy: require('./resources/BillingInfoUpdatedBy'),
  BinaryFile: require('./resources/BinaryFile'),
  Coupon: require('./resources/Coupon'),
  CouponDiscount: require('./resources/CouponDiscount'),
  CouponDiscountPricing: require('./resources/CouponDiscountPricing'),
  CouponDiscountTrial: require('./resources/CouponDiscountTrial'),
  CouponMini: require('./resources/CouponMini'),
  CouponRedemption: require('./resources/CouponRedemption'),
  CouponRedemptionMini: require('./resources/CouponRedemptionMini'),
  CreditPayment: require('./resources/CreditPayment'),
  CustomField: require('./resources/CustomField'),
  CustomFieldDefinition: require('./resources/CustomFieldDefinition'),
  Error: require('./resources/Error'),
  ErrorMayHaveTransaction: require('./resources/ErrorMayHaveTransaction'),
  FraudInfo: require('./resources/FraudInfo'),
  Invoice: require('./resources/Invoice'),
  InvoiceAddress: require('./resources/InvoiceAddress'),
  InvoiceCollection: require('./resources/InvoiceCollection'),
  InvoiceMini: require('./resources/InvoiceMini'),
  Item: require('./resources/Item'),
  ItemMini: require('./resources/ItemMini'),
  LineItem: require('./resources/LineItem'),
  LineItemList: require('./resources/LineItemList'),
  PaymentMethod: require('./resources/PaymentMethod'),
  Plan: require('./resources/Plan'),
  PlanHostedPages: require('./resources/PlanHostedPages'),
  PlanMini: require('./resources/PlanMini'),
  PlanPricing: require('./resources/PlanPricing'),
  Pricing: require('./resources/Pricing'),
  Settings: require('./resources/Settings'),
  ShippingAddress: require('./resources/ShippingAddress'),
  ShippingMethod: require('./resources/ShippingMethod'),
  ShippingMethodMini: require('./resources/ShippingMethodMini'),
  Site: require('./resources/Site'),
  Subscription: require('./resources/Subscription'),
  SubscriptionAddOn: require('./resources/SubscriptionAddOn'),
  SubscriptionAddOnTier: require('./resources/SubscriptionAddOnTier'),
  SubscriptionChange: require('./resources/SubscriptionChange'),
  SubscriptionShipping: require('./resources/SubscriptionShipping'),
  TaxInfo: require('./resources/TaxInfo'),
  Tier: require('./resources/Tier'),
  Transaction: require('./resources/Transaction'),
  TransactionError: require('./resources/TransactionError'),
  TransactionPaymentGateway: require('./resources/TransactionPaymentGateway'),
  UniqueCouponCode: require('./resources/UniqueCouponCode'),
  User: require('./resources/User')
}

const Page = require('./Page')
// Page has object type "list"
exps.List = Page

const Resource = require('./Resource')
/**
 * A special resource for an empty response
 */
exps.Empty = class Empty extends Resource {
  static getSchema () { return {} }
}

module.exports = exps
