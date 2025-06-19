import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/')
    
    // Check if the main heading is visible
    await expect(page.getByRole('heading', { name: /Turn Clicks into Clients with Salt Digital/i })).toBeVisible()
    
    // Check if CTA buttons are visible
    await expect(page.getByRole('button', { name: /Book Your Strategy Call/i })).toBeVisible()
    await expect(page.getByRole('button', { name: /See Our Results/i })).toBeVisible()
  })

  test('should navigate to sections when clicking nav links', async ({ page }) => {
    await page.goto('/')
    
    // Click on Services nav link
    await page.getByRole('button', { name: 'Services' }).click()
    
    // Check if Services section is visible
    await expect(page.getByRole('heading', { name: /Services That Scale Your Success/i })).toBeVisible()
  })

  test('should open mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }) // Mobile viewport
    await page.goto('/')
    
    // Click mobile menu button
    await page.getByRole('button', { name: /menu/i }).click()
    
    // Check if mobile navigation is visible
    await expect(page.getByRole('button', { name: 'Services' })).toBeVisible()
  })

  test('should scroll to CTA section when clicking hero CTA', async ({ page }) => {
    await page.goto('/')
    
    // Click the main CTA button
    await page.getByRole('button', { name: /Book Your Strategy Call/i }).first().click()
    
    // Check if we scrolled to the CTA section
    await expect(page.locator('#cta-section')).toBeInViewport()
  })

  test('should display all main sections', async ({ page }) => {
    await page.goto('/')
    
    // Check if all main sections are present
    await expect(page.locator('#services')).toBeVisible()
    await expect(page.locator('#case-studies')).toBeVisible()
    await expect(page.locator('#about')).toBeVisible()
    await expect(page.locator('#faq')).toBeVisible()
    await expect(page.locator('#cta-section')).toBeVisible()
  })
}) 