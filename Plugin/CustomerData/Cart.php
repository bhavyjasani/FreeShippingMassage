<?php
namespace Dolphin\FreeShippingMessage\Plugin\CustomerData;

class Cart
{
    
    public function afterGetSectionData(\Magento\Checkout\CustomerData\Cart $subject, array $result)
    {

        $cartTotal = isset($result['subtotalAmount']) ? $result['subtotalAmount'] : 0;

        if($cartTotal >= 100){
            $result['free_shipping_message']=[
                'message' => 'Yah! You are eligible for free shipping!',
                'background_color' => 'green'
            ];
        }else{
            $remainingAmount = 100 - $cartTotal;
            $result['free_shipping_message']=[
                'message' => __('Spend additional $%1 to qualify for free shipping', number_format($remainingAmount, 2)),
                'background_color' => 'orange'
            ];
        }
        
        return $result;
    }

}